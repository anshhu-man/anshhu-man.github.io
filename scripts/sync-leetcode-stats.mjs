import { readFile, writeFile } from 'node:fs/promises';

const USERNAME = 'anshhu_man';
const ENDPOINT = 'https://leetcode.com/graphql/';
const OUTPUT_PATH = new URL('../app/data/leetcode.json', import.meta.url);
const MAX_ATTEMPTS = 3;

const query = `
  query PortfolioStats($username: String!) {
    matchedUser(username: $username) {
      username
      profile {
        ranking
      }
      submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
        }
        totalSubmissionNum {
          difficulty
          submissions
        }
      }
    }
    userContestRanking(username: $username) {
      attendedContestsCount
      rating
      topPercentage
    }
  }
`;

const wait = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

async function requestStats() {
  let lastError;

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Referer: `https://leetcode.com/u/${USERNAME}/`,
          'User-Agent': 'Mozilla/5.0 (compatible; AnshumanPortfolio/1.0)',
        },
        body: JSON.stringify({
          query,
          variables: { username: USERNAME },
        }),
        signal: AbortSignal.timeout(15_000),
      });

      if (!response.ok) {
        throw new Error(`LeetCode returned HTTP ${response.status}`);
      }

      const payload = await response.json();

      if (payload.errors?.length) {
        throw new Error(
          `LeetCode GraphQL error: ${payload.errors
            .map((error) => error.message)
            .join('; ')}`,
        );
      }

      return payload.data;
    } catch (error) {
      lastError = error;

      if (attempt < MAX_ATTEMPTS) {
        await wait(1_000 * 2 ** (attempt - 1));
      }
    }
  }

  throw lastError;
}

function requireNonNegativeInteger(value, label) {
  if (!Number.isInteger(value) || value < 0) {
    throw new Error(`Invalid ${label}: ${value}`);
  }

  return value;
}

function validNumberOrPrevious(value, fallback, label, integer = false) {
  const valid =
    typeof value === 'number' &&
    Number.isFinite(value) &&
    value >= 0 &&
    (!integer || Number.isInteger(value));

  if (valid) {
    return value;
  }

  if (typeof fallback === 'number' && Number.isFinite(fallback)) {
    console.warn(`Keeping the previous ${label}; LeetCode returned ${value}`);
    return fallback;
  }

  throw new Error(`Invalid ${label}: ${value}`);
}

const previousStats = JSON.parse(await readFile(OUTPUT_PATH, 'utf8'));
const data = await requestStats();
const matchedUser = data?.matchedUser;

if (!matchedUser || matchedUser.username !== USERNAME) {
  throw new Error('LeetCode did not return the expected public profile');
}

const solvedByDifficulty = Object.fromEntries(
  matchedUser.submitStatsGlobal.acSubmissionNum.map(({ difficulty, count }) => [
    difficulty.toLowerCase(),
    count,
  ]),
);

const total = requireNonNegativeInteger(solvedByDifficulty.all, 'total solved count');
const easy = requireNonNegativeInteger(solvedByDifficulty.easy, 'easy solved count');
const medium = requireNonNegativeInteger(solvedByDifficulty.medium, 'medium solved count');
const hard = requireNonNegativeInteger(solvedByDifficulty.hard, 'hard solved count');
const totalSubmissions = requireNonNegativeInteger(
  matchedUser.submitStatsGlobal.totalSubmissionNum.find(
    ({ difficulty }) => difficulty === 'All',
  )?.submissions,
  'total submission count',
);

if (total !== easy + medium + hard) {
  throw new Error('Difficulty counts do not add up to the total solved count');
}

if (total < previousStats.solved.total) {
  throw new Error(
    `Refusing to replace ${previousStats.solved.total} solved problems with ${total}`,
  );
}

if (totalSubmissions < previousStats.submissions.total) {
  throw new Error(
    `Refusing to replace ${previousStats.submissions.total} submissions with ${totalSubmissions}`,
  );
}

const contest = data.userContestRanking;

const nextStats = {
  username: USERNAME,
  solved: { total, easy, medium, hard },
  submissions: { total: totalSubmissions },
  contest: {
    topPercentage: validNumberOrPrevious(
      contest?.topPercentage,
      previousStats.contest.topPercentage,
      'contest top percentage',
    ),
    rating: validNumberOrPrevious(
      contest?.rating,
      previousStats.contest.rating,
      'contest rating',
    ),
    attended: validNumberOrPrevious(
      contest?.attendedContestsCount,
      previousStats.contest.attended,
      'contest count',
      true,
    ),
  },
  profile: {
    ranking: validNumberOrPrevious(
      matchedUser.profile?.ranking,
      previousStats.profile.ranking,
      'profile ranking',
      true,
    ),
  },
};

await writeFile(OUTPUT_PATH, `${JSON.stringify(nextStats, null, 2)}\n`);
console.log(
  `LeetCode statistics ready: ${total} problems solved, ${totalSubmissions} submissions`,
);
