import type { Metadata } from 'next';

const title = 'Résumé — Anshuman Acharya';
const description = 'View or download Anshuman Acharya’s software engineering résumé.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: '/resume',
    images: [],
  },
  twitter: {
    title,
    description,
    images: [],
  },
};

export default function ResumePage() {
  return (
    <main className="resume-preview-page">
      <iframe
        className="resume-preview-frame"
        src="/Anshuman_Acharya_Resume.pdf#view=FitH&toolbar=1&navpanes=0"
        title="Anshuman Acharya résumé preview"
      />
    </main>
  );
}
