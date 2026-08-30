import Image from 'next/image';

type HighlightKind = 'keyword' | 'metric';

const contentHighlights: Array<{ phrase: string; kind: HighlightKind }> = [
  { phrase: 'more than 50,000 files', kind: 'metric' },
  { phrase: '30 passing adversarial tests', kind: 'metric' },
  { phrase: 'under 15 minutes', kind: 'metric' },
  { phrase: '1,000+ users', kind: 'metric' },
  { phrase: '500+ OCI Compute instances', kind: 'metric' },
  { phrase: 'about 3 hours', kind: 'metric' },
  { phrase: '40%', kind: 'metric' },
  { phrase: '25%', kind: 'metric' },
  { phrase: '27%', kind: 'metric' },
  { phrase: '0→1', kind: 'metric' },
  { phrase: 'Python, LangChain, OpenAI API, and Confluence APIs', kind: 'keyword' },
  { phrase: 'Python, LangChain, Pinecone, OpenAI API, and DeepEval', kind: 'keyword' },
  { phrase: 'Python, Bash, OCI SDKs, and REST APIs', kind: 'keyword' },
  { phrase: 'Kotlin, Jetpack Compose, and Firebase', kind: 'keyword' },
  { phrase: 'CLOS, JFAB, QFAB, and Top-of-Rack fabrics', kind: 'keyword' },
  { phrase: 'sourced facts, inferences, suggestions, conflicts, and unknowns', kind: 'keyword' },
  { phrase: 'Kotlin-based AI meal-planning application', kind: 'keyword' },
  { phrase: 'multi-agent DeFi proof of concept', kind: 'keyword' },
  { phrase: 'runbook-grounded GenAI assistant', kind: 'keyword' },
  { phrase: 'OCI/DRCC onboarding copilot', kind: 'keyword' },
  { phrase: 'cloud-network infrastructure', kind: 'keyword' },
  { phrase: 'agent-evaluation environment', kind: 'keyword' },
  { phrase: 'Firebase-backed user flows', kind: 'keyword' },
  { phrase: 'graduated task graders', kind: 'keyword' },
  { phrase: 'real-time Pyth price feeds', kind: 'keyword' },
  { phrase: 'AI-native social media app', kind: 'keyword' },
  { phrase: 'complete food-ordering flow', kind: 'keyword' },
  { phrase: 'offline-state handling', kind: 'keyword' },
  { phrase: 'RAG knowledge assistant', kind: 'keyword' },
  { phrase: 'grounded AI tools', kind: 'keyword' },
  { phrase: 'community messaging', kind: 'keyword' },
  { phrase: 'short-form video', kind: 'keyword' },
  { phrase: 'global discovery', kind: 'keyword' },
  { phrase: 'VNIC provisioning', kind: 'keyword' },
  { phrase: 'privacy threat model', kind: 'keyword' },
  { phrase: 'trust boundaries', kind: 'keyword' },
  { phrase: 'source provenance', kind: 'keyword' },
  { phrase: 'AI orchestration', kind: 'keyword' },
  { phrase: '3D interactions', kind: 'keyword' },
  { phrase: 'OpenStreetMap', kind: 'keyword' },
  { phrase: 'SMS alerts', kind: 'keyword' },
  { phrase: 'GPS speed', kind: 'keyword' },
];

const highlightLookup = new Map(contentHighlights.map((highlight) => [highlight.phrase, highlight.kind]));
const highlightPattern = new RegExp(
  `(${contentHighlights
    .map((highlight) => highlight.phrase)
    .sort((first, second) => second.length - first.length)
    .map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|')})`,
  'g',
);

function HighlightedText({ text }: { text: string }) {
  return text.split(highlightPattern).map((segment, index) => {
    const kind = highlightLookup.get(segment);

    return kind ? (
      <mark className={`content-highlight ${kind}-highlight`} key={`${segment}-${index}`}>
        {segment}
      </mark>
    ) : segment;
  });
}

const experience = [
  {
    dates: 'Jul 2024 — Present',
    company: 'Oracle Cloud Infrastructure',
    role: 'Software Development Engineer · Network Layer',
    location: 'Bengaluru, India',
    summary:
      'Building grounded AI tools, backend automation, and production software while coordinating rollout readiness for high-stakes cloud-network infrastructure.',
    details: [
      'Built an OCI/DRCC onboarding copilot—a runbook-grounded GenAI assistant using Python, LangChain, OpenAI API, and Confluence APIs—cutting common setup response time from about 3 hours to under 15 minutes.',
      'Reduced onboarding time by 40% and documentation errors by 25% through the assistant.',
      'Drive rollout readiness across CLOS, JFAB, QFAB, and Top-of-Rack fabrics through dependency tracking, validation gates, rollback plans, game-day checklists, and stakeholder coordination.',
    ],
  },
  {
    dates: 'May 2024 — Jul 2024',
    company: 'Oracle Cloud Infrastructure',
    role: 'Server Tech Intern',
    location: 'Bengaluru, India',
    summary:
      'Automated repeatable cloud-infrastructure deployment work at fleet scale.',
    details: [
      'Automated VNIC provisioning across 500+ OCI Compute instances using Python, Bash, OCI SDKs, and REST APIs.',
      'Improved deployment consistency by 40% and converted manual steps into reusable implementation notes.',
    ],
  },
  {
    dates: 'May 2023 — Jul 2023',
    company: 'Unino',
    role: 'Android Developer Intern',
    location: 'Remote',
    summary:
      'Shipped mobile product features across engineering, design, and release validation.',
    details: [
      'Built Kotlin, Jetpack Compose, and Firebase features for a store-management application used by 1,000+ users.',
      'Partnered with design and QA on onboarding, responsiveness, and release quality.',
    ],
  },
];

const githubProjects = [
  {
    number: '02',
    name: 'Agentic DeFi',
    type: 'Agentic systems · Full stack',
    description:
      'A multi-agent DeFi proof of concept combining AI orchestration, real-time Pyth price feeds, 1inch limit-order flows, Fluence compute, and on-chain strategy components.',
    tags: ['TypeScript', 'Python', 'Solidity', 'React', 'Pyth', '1inch'],
    github: 'https://github.com/anshhu-man/Agentic-DeFi',
    live: 'https://intellifi.vercel.app',
    accent: 'violet',
  },
  {
    number: '03',
    name: 'FireFighter',
    type: 'AI evaluation · Agent environment',
    description:
      'An OpenEnv-style agent-evaluation environment for inbox triage, summaries, action items, and follow-ups with graduated task graders.',
    tags: ['Python', 'OpenEnv', 'Pydantic', 'FastAPI', 'AI evals'],
    github: 'https://github.com/anshhu-man/FireFighter',
    accent: 'orange',
  },
  {
    number: '04',
    name: 'Spree',
    type: 'Interactive web product',
    description:
      'An event discovery and registration experience with authentication, animated presentation, 3D interactions, and Firebase-backed user flows.',
    tags: ['React', 'Three.js', 'Framer Motion', 'Firebase', 'JavaScript'],
    github: 'https://github.com/anshhu-man/Spree',
    live: 'https://spree-five.vercel.app',
    accent: 'lime',
  },
  {
    number: '05',
    name: 'Drive Guard',
    type: 'Android · Safety systems',
    description:
      'A road-safety application that tracks GPS speed, retrieves local limits from OpenStreetMap, applies curfew rules, and sends configured SMS alerts.',
    tags: ['Java', 'Android', 'Location APIs', 'OpenStreetMap', 'SMS'],
    github: 'https://github.com/anshhu-man/Drive-Guard',
    accent: 'blue',
  },
  {
    number: '06',
    name: 'FoodSaver',
    type: 'Android · Consumer product',
    description:
      'A complete food-ordering flow spanning onboarding, authentication, catalogue, item detail, cart, profile, cloud data, and offline-state handling.',
    tags: ['Kotlin', 'Android', 'Firebase', 'Retrofit', 'ViewBinding'],
    github: 'https://github.com/anshhu-man/FoodSaver',
    accent: 'gold',
  },
];

const featuredCaseStudies = [
  {
    type: 'RAG · Evaluation',
    title: 'Nexus-AI',
    subtitle: 'Knowledge retrieval at document scale',
    image: '/nexus-ai-visual.png',
    alt: 'Abstract visualization of documents moving through a retrieval and evidence-grounding system',
    description:
      'A RAG knowledge assistant designed to find, evaluate, and ground answers across a corpus of more than 50,000 files.',
    evidence: [
      'Built with Python, LangChain, Pinecone, OpenAI API, and DeepEval',
      'Improved measured retrieval quality by 27%',
      'Structured around evidence retrieval, evaluation, and answer grounding',
    ],
    tags: ['Python', 'LangChain', 'Pinecone', 'OpenAI API', 'DeepEval'],
  },
  {
    type: 'Mobile AI · Kotlin',
    title: 'Smart Kitchen',
    subtitle: 'Practical AI for everyday meal decisions',
    image: '/smart-kitchen-visual.png',
    alt: 'Elegant meal-planning product illustration with a mobile interface, ingredients, and a prepared dish',
    description:
      'A Kotlin-based AI meal-planning application focused on dietary matching, practical recommendations, and reducing avoidable food waste.',
    evidence: [
      'Designed around dietary preferences and practical meal recommendations',
      'Connected mobile product thinking with AI-assisted planning',
      'Explored food reuse and waste-reduction behavior in the core journey',
    ],
    tags: ['Kotlin', 'Mobile AI', 'Recommendations', 'Product design', 'Food waste'],
  },
  {
    type: 'Product strategy',
    title: 'Metzy',
    subtitle: 'AI-native global social discovery',
    image: '/metzy-visual.png',
    alt: 'Metzy social media app concept showing a short-video feed, discovery, messaging, reactions, global communities, and safety controls',
    description:
      'An AI-native social media app concept shaped from first principles across short-form video, community messaging, global discovery, safety, retention, and launch strategy.',
    evidence: [
      'Defined personas, social feeds, creator discovery, and community journeys',
      'Mapped messaging, moderation, safety flows, retention hypotheses, and success metrics',
      'Developed a structured launch and learning plan',
    ],
    tags: ['Social media', 'Product strategy', 'AI discovery', 'Trust & safety', 'Growth metrics'],
  },
];

const profileLinks = [
  {
    name: 'GitHub',
    handle: '@anshhu-man',
    primary: '26 public repos',
    secondary: '200 visible contributions since 2022',
    href: 'https://github.com/anshhu-man',
    tone: 'github',
  },
  {
    name: 'Codeforces',
    handle: 'anshhu_man',
    primary: '193+ solved',
    secondary: 'Pupil · 1,353 peak · 69 rated contests',
    href: 'https://codeforces.com/profile/anshhu_man',
    tone: 'codeforces',
  },
  {
    name: 'CodeChef',
    handle: 'anshhu_man',
    primary: '2★ · 1,609 peak',
    secondary: '66 solved · 21 contests · best #8 (Div. 3)',
    href: 'https://www.codechef.com/users/anshhu_man',
    tone: 'codechef',
  },
];

const capabilities = [
  {
    number: '01',
    title: 'Applied AI',
    skills: ['Grounded LLMs', 'RAG', 'Evaluation', 'LangChain', 'OpenAI API', 'Pinecone', 'DeepEval'],
  },
  {
    number: '02',
    title: 'Software development',
    skills: ['Python', 'Java', 'TypeScript', 'SQL', 'REST APIs', 'React', 'FastAPI', 'Docker'],
  },
  {
    number: '03',
    title: 'Cloud networking',
    skills: ['Network fundamentals', 'TCP/IP', 'OCI', 'VNIC', 'CLOS fabrics', 'Top-of-Rack', 'BGP', 'OSPF'],
  },
  {
    number: '04',
    title: 'Product execution',
    skills: ['MVP scoping', 'Roadmaps', 'Success metrics', 'Risk registers', 'Release readiness', 'Stakeholder alignment'],
  },
  {
    number: '05',
    title: 'Mobile',
    skills: ['Kotlin', 'Android', 'Jetpack Compose', 'Firebase', 'Release validation'],
  },
  {
    number: '06',
    title: 'Leadership',
    skills: ['Technical programs', 'Mentoring', 'Workshops', 'Hackathons', 'Cross-functional delivery'],
  },
];

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Anshuman Acharya',
  jobTitle: 'Software Development Engineer',
  worksFor: { '@type': 'Organization', name: 'Oracle Cloud Infrastructure' },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'National Institute of Technology, Rourkela',
  },
  sameAs: [
    'https://www.linkedin.com/in/anshuman-acharya-2a1a2122a/',
    'https://github.com/anshhu-man',
    'https://leetcode.com/u/anshhu_man/',
    'https://codeforces.com/profile/anshhu_man',
    'https://www.codechef.com/users/anshhu_man',
  ],
  knowsAbout: [
    'Applied AI',
    'Retrieval-Augmented Generation',
    'LLM Evaluation',
    'Cloud Infrastructure',
    'Cloud Networking',
    'Data Center Fabrics',
    'TCP/IP',
    'BGP',
    'OSPF',
    'Network Automation',
    'Technical Program Leadership',
  ],
};

export default function Home() {
  return (
    <main className="portfolio-site">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <nav className="corporate-nav" aria-label="Primary navigation">
        <div className="corporate-brand">
          <a
            className="corporate-profile-photo"
            href="https://www.linkedin.com/in/anshuman-acharya-2a1a2122a/"
            target="_blank"
            rel="noreferrer"
            aria-label="View Anshuman Acharya on LinkedIn"
          >
            <Image
              src="/anshuman-profile.jpg"
              width={80}
              height={80}
              alt="Anshuman Acharya"
              priority
            />
          </a>
          <a className="corporate-brand-name" href="#top" aria-label="Anshuman Acharya, home">
            <strong>Anshuman Acharya</strong>
          </a>
        </div>
        <div className="corporate-nav-links">
          <a href="#coding">LeetCode</a>
          <a href="#work">Projects</a>
          <a href="#leadership">Leadership</a>
          <a href="#experience">Experience</a>
          <a className="corporate-contact" href="mailto:anshhuman01@gmail.com">
            Contact
          </a>
        </div>
      </nav>

      <section className="corporate-hero" id="top">
        <div className="corporate-hero-copy">
          <p className="corporate-eyebrow">
            <span aria-hidden="true" />
            Software Development Engineer · Oracle Cloud Infrastructure
          </p>
          <h1>Anshuman Acharya</h1>
          <p className="corporate-intro">
            I&apos;m Anshuman Acharya—a Software Development Engineer at Oracle
            Cloud Infrastructure working across applied AI, backend development,
            and cloud networking. I turn ambiguous workflows into measurable
            tools, reliable systems, and clear execution plans.
          </p>
          <div className="corporate-actions">
            <a className="primary-button" href="#work">
              View selected projects
            </a>
            <a className="secondary-button" href="/Anshuman_Acharya_Resume.pdf" download>
              View résumé
            </a>
          </div>
          <div className="hero-profile-links" aria-label="Professional profiles">
            <a href="https://www.linkedin.com/in/anshuman-acharya-2a1a2122a/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://github.com/anshhu-man" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="mailto:anshhuman01@gmail.com">Email</a>
          </div>
        </div>

        <aside className="executive-summary" aria-label="Professional summary">
          <div className="summary-heading">
            <span>At a glance</span>
          </div>
          <p className="summary-statement">
            Software Development Engineer at Oracle Cloud Infrastructure with
            experience building grounded LLM applications, developing backend
            automation, and coordinating network-infrastructure rollouts.
          </p>
          <div className="summary-focus-grid">
            <div><span>Current role</span><strong>Software Development Engineer, OCI</strong></div>
            <div><span>Core expertise</span><strong>Applied AI, software development, cloud networking</strong></div>
            <div><span>Delivery strengths</span><strong>Software development, network automation, release readiness, risk tracking, stakeholder coordination</strong></div>
            <div><span>Location</span><strong>Bengaluru, India</strong></div>
          </div>
        </aside>
      </section>

      <section className="corporate-section education-corporate" id="education">
        <div>
          <p className="section-label">Education</p>
          <h2>National Institute of Technology, Rourkela</h2>
          <p>Rourkela, Odisha, India · 2021—2025</p>
        </div>
        <article className="education-card">
          <span>Academic credentials</span>
          <dl>
            <div><dt>B.Tech</dt><dd>Electronics &amp; Communication Engineering <strong>8.52 / 10</strong></dd></div>
            <div><dt>Minor</dt><dd>Computer Science Engineering <strong>9.13 / 10</strong></dd></div>
          </dl>
        </article>
      </section>

      <section className="corporate-section corporate-coding" id="coding">
        <header className="corporate-section-heading">
          <p className="section-label">Coding profile</p>
          <h2>LeetCode performance</h2>
          <p>
            A verified snapshot of problem-solving depth, contest performance,
            and implementation consistency.
          </p>
        </header>

        <div className="leetcode-dashboard">
          <a
            className="leetcode-dashboard-heading"
            href="https://leetcode.com/u/anshhu_man/"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <strong>LeetCode</strong>
              <small>@anshhu_man</small>
            </span>
            <span>View public profile ↗</span>
          </a>

          <div className="leetcode-executive-row">
            <div className="solved-summary">
              <div className="solved-total">
                <span className="metric-label">Problems solved</span>
                <strong>651</strong>
              </div>
              <div className="difficulty-block">
                <span className="metric-label">Difficulty distribution</span>
                <div className="difficulty-summary" aria-label="183 Easy, 359 Medium, and 109 Hard problems solved">
                  <div><span>Easy</span><strong>183</strong></div>
                  <div><span>Medium</span><strong>359</strong></div>
                  <div className="hard-metric"><span>Hard</span><strong>109</strong></div>
                </div>
                <div className="difficulty-bar" aria-hidden="true">
                  <span className="easy-bar" /><span className="medium-bar" /><span className="hard-bar" />
                </div>
              </div>
            </div>
            <div className="contest-kpis">
              <div><span>Contest standing</span><strong>Top 19.8%</strong></div>
              <div><span>Contest rating</span><strong>1,636</strong></div>
            </div>
          </div>

          <div className="leetcode-supporting-metrics">
            <div><span>C++ problems solved</span><strong>650</strong></div>
            <div><span>Contests attended</span><strong>12</strong></div>
            <div><span>LeetCode profile rank</span><strong>#114,836</strong></div>
          </div>
        </div>

        <div className="competitive-profile-strip">
          {profileLinks.map((profile) => (
            <a href={profile.href} target="_blank" rel="noreferrer" key={profile.name}>
              <span>{profile.name} · {profile.handle}</span>
              <strong>{profile.primary}</strong>
              <small>{profile.secondary}</small>
            </a>
          ))}
        </div>
      </section>

      <section className="corporate-section" id="experience">
        <header className="corporate-section-heading">
          <p className="section-label">Professional experience</p>
          <h2>Engineering work with measurable operational impact</h2>
          <p>
            Software development, cloud networking, internal AI tooling, and
            mobile products—each role strengthened a different layer of how I
            build and lead.
          </p>
        </header>

        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-entry" key={`${item.company}-${item.role}`}>
              <div className="experience-meta">
                <span>{item.dates}</span>
                <small>{item.location}</small>
              </div>
              <div className="experience-title">
                <h3>{item.role}</h3>
                <p>{item.company}</p>
              </div>
              <div className="experience-content">
                <strong><HighlightedText text={item.summary} /></strong>
                <ul>{item.details.map((detail) => <li key={detail}><HighlightedText text={detail} /></li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-surface" id="work">
        <div className="corporate-section">
          <div className="case-study-section">
            <div className="case-study-heading">
              <p className="section-label">Featured work</p>
              <h3>Featured Projects</h3>
            </div>
            <div className="featured-case-study-list">
              {featuredCaseStudies.map((study, index) => (
                <article className={`featured-case-study ${index % 2 === 1 ? 'image-right' : ''}`} key={study.title}>
                  <div className="featured-case-study-image">
                    <Image src={study.image} width={1536} height={1024} alt={study.alt} />
                  </div>
                  <div className="featured-case-study-content">
                    <p className="project-type">{study.type}</p>
                    <h4>{study.title}</h4>
                    <p className="case-study-subtitle">{study.subtitle}</p>
                    <p className="case-study-description"><HighlightedText text={study.description} /></p>
                    <ul>{study.evidence.map((item) => <li key={item}><HighlightedText text={item} /></li>)}</ul>
                    <div className="technology-list">
                      {study.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <header className="corporate-section-heading selected-projects-heading">
            <p className="section-label">Selected projects</p>
            <h2>Applied AI, cloud networking, and product engineering</h2>
            <p>
              Public GitHub work and selected résumé case studies, organized by
              the engineering judgment and product ownership they demonstrate.
            </p>
          </header>

          <article className="featured-project">
            <div className="featured-project-image">
              <Image
                src="/paperwork.jpg"
                width={1200}
                height={630}
                alt="PaperWork — from confusing paper to clear next steps"
              />
            </div>
            <div className="featured-project-content">
              <p className="project-status">Featured open-source project · Pre-alpha</p>
              <h3>PaperWork</h3>
              <p className="project-subtitle">Trust architecture for document AI</p>
              <p><HighlightedText text="A working sample that keeps sourced facts, inferences, suggestions, conflicts, and unknowns visibly separate. Its v1 contracts model evidence, consent, transfers, corrections, and event-derived processing receipts." /></p>
              <ul>
                <li><HighlightedText text="Strict TypeScript runtime contracts backed by 30 passing adversarial tests" /></li>
                <li><HighlightedText text="Documented privacy threat model, trust boundaries, and source provenance" /></li>
                <li><HighlightedText text="0→1 product rules, roadmap, security policy, and contributor workflows" /></li>
              </ul>
              <div className="technology-list">
                {['React 19', 'TypeScript', 'Vinext / Vite', 'Cloudflare-compatible', 'Responsible AI'].map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <p className="project-boundary">Current boundary: live OCR and AI analysis are intentionally not connected yet.</p>
              <a className="text-link" href="https://github.com/anshhu-man/paperwork" target="_blank" rel="noreferrer">View repository ↗</a>
            </div>
          </article>

          <div className="project-grid">
            {githubProjects.map((project) => (
              <article className="project-card" key={project.name}>
                <p className="project-type">{project.type}</p>
                <h3>{project.name}</h3>
                <p><HighlightedText text={project.description} /></p>
                <div className="technology-list">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">Source ↗</a>
                  {project.live ? <a href={project.live} target="_blank" rel="noreferrer">Live demo ↗</a> : null}
                </div>
              </article>
            ))}
          </div>

          <div className="additional-projects">
            <span>Additional GitHub work</span>
            <a href="https://github.com/anshhu-man/Movie-List" target="_blank" rel="noreferrer">Movie List ↗</a>
            <a href="https://github.com/anshhu-man/Restro---Restaurant-Management-App" target="_blank" rel="noreferrer">Restro ↗</a>
            <a href="https://github.com/anshhu-man?tab=repositories" target="_blank" rel="noreferrer">View all 26 repositories ↗</a>
          </div>
        </div>
      </section>

      <section className="corporate-section" id="leadership">
        <header className="corporate-section-heading">
          <p className="section-label">AI and technical leadership</p>
          <h2>Technical depth, product judgment, and delivery discipline</h2>
          <p>
            My leadership is grounded in program ownership, technical
            decision-making, and cross-functional delivery. I turn ambiguous
            systems into clear decisions, owners, safeguards, and measurable outcomes.
          </p>
        </header>

        <div className="leadership-grid-corporate">
          <article>
            <span>01</span>
            <h3>Applied AI systems</h3>
            <p>Grounded assistants, RAG pipelines, evaluation, evidence integrity, explicit failure states, and human-readable trust boundaries.</p>
            <ul><li>Runbook-grounded OCI assistant</li><li>Nexus retrieval evaluation</li><li>PaperWork responsible-AI contracts</li></ul>
          </article>
          <article>
            <span>02</span>
            <h3>Product execution</h3>
            <p>MVP boundaries, user journeys, release gates, roadmaps, risk registers, stakeholder updates, and behavior-linked success metrics.</p>
            <ul><li>40% lower onboarding time</li><li>25% fewer documentation errors</li><li>0→1 open-source product prototype</li></ul>
          </article>
          <article>
            <span>03</span>
            <h3>Technical leadership</h3>
            <p>Rollout planning, dependency tracking, validation gates, mentoring, and programs that make complex work repeatable.</p>
            <ul>
              <li>Training Coordinator — 15+ programs reaching 5,000+ students</li>
              <li>APS Technical Lead — 100+ students mentored</li>
              <li>OCI rollout readiness — validation, rollback, and game-day planning</li>
            </ul>
          </article>
        </div>

        <div className="leadership-metrics">
          <div><strong>15+</strong><span>Programs directed</span></div>
          <div><strong>5,000+</strong><span>Students reached</span></div>
          <div><strong>100+</strong><span>Students mentored</span></div>
          <div><strong>Top 10</strong><span>of 500+ AI hackathon teams</span></div>
        </div>
      </section>

      <section className="working-style-surface" id="professional-strengths">
        <div className="corporate-section">
          <header className="corporate-section-heading">
            <p className="section-label">Leadership and collaboration</p>
            <h2>Evidence-backed ways of working</h2>
            <p>
              How I communicate, coordinate, and take ownership while moving
              technical work from ambiguity to reliable delivery.
            </p>
          </header>
          <div className="soft-skills-grid">
            <article><span>01</span><h3>Leadership and program management</h3><p>Directed 15+ programs reaching 5,000+ students while coordinating owners, timelines, partners, communications, execution risks, and retrospectives.</p></article>
            <article><span>02</span><h3>Communication and stakeholder alignment</h3><p>Translate operational pain points into requirements, runbooks, validation gates, risk ownership, and clear stakeholder updates.</p></article>
            <article><span>03</span><h3>Teamwork and mentoring</h3><p>Partnered with design and QA through release validation; mentored 100+ students and led workshops and contests reaching 1,000+ participants.</p></article>
            <article><span>04</span><h3>Ownership and problem solving</h3><p>Break ambiguous work into dependencies, safeguards, rollback paths, automation opportunities, and executable next steps.</p></article>
          </div>
        </div>
      </section>

      <section className="capabilities-surface" id="expertise">
        <div className="corporate-section">
          <header className="corporate-section-heading compact-heading">
            <p className="section-label">Technical capabilities</p>
            <h2>Skills grouped by engineering outcome</h2>
          </header>
          <div className="capability-grid-corporate">
            {capabilities.map((capability) => (
              <article key={capability.title}>
                <span>{capability.number}</span>
                <h3>{capability.title}</h3>
                <p>{capability.skills.join(' · ')}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="corporate-contact-section" id="contact">
        <div>
          <p className="section-label">Contact</p>
          <h2>Let&apos;s discuss applied AI, cloud infrastructure, or technical product work.</h2>
        </div>
        <div className="contact-actions">
          <a className="contact-email" href="mailto:anshhuman01@gmail.com">anshhuman01@gmail.com</a>
          <div>
            <a href="https://www.linkedin.com/in/anshuman-acharya-2a1a2122a/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://github.com/anshhu-man" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://leetcode.com/u/anshhu_man/" target="_blank" rel="noreferrer">LeetCode ↗</a>
            <a href="/Anshuman_Acharya_Resume.pdf" download>View résumé</a>
          </div>
        </div>
      </section>

      <footer className="corporate-footer">
        <span>© 2026 Anshuman Acharya</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
