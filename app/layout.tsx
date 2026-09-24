import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const siteOrigin = process.env.NEXT_PUBLIC_SITE_ORIGIN ?? 'http://localhost:3001';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: 'Anshuman Acharya — Applied AI, Cloud Infrastructure & Technical Leadership',
  description:
    'Software Developer at Oracle building grounded AI tools, backend software, cloud automation, and Oracle Cloud Infrastructure network systems.',
  authors: [{ name: 'Anshuman Acharya' }],
  creator: 'Anshuman Acharya',
  keywords: [
    'Anshuman Acharya',
    'Software Engineer',
    'Generative AI',
    'RAG',
    'LLM Evaluation',
    'Cloud Infrastructure',
    'Cloud Networking',
    'Network Engineering',
    'BGP',
    'OSPF',
    'Product Strategy',
    'Technical Leadership',
    'Oracle Cloud Infrastructure',
    'Python',
    'Kotlin',
  ],
  openGraph: {
    title: 'Anshuman Acharya — Applied AI, Cloud Infrastructure & Technical Leadership',
    description: 'Software Developer working across applied AI, backend systems, and Oracle Cloud Infrastructure networking at Oracle.',
    url: '/',
    siteName: 'Anshuman Acharya',
    images: [
      {
        url: '/og.png',
        width: 1731,
        height: 908,
        alt: 'Anshuman Acharya — Applied AI, Cloud Infrastructure, and Technical Leadership.',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anshuman Acharya — Applied AI, Cloud Infrastructure & Technical Leadership',
    description: 'Software Developer working across applied AI, backend systems, and Oracle Cloud Infrastructure networking at Oracle.',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
