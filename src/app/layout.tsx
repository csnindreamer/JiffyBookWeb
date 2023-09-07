import './globals.css';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { LanguageProvider } from './api/LanguageContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'JiffyBook',
  description: 'JiffyBook',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <html lang="en">
        <Head>
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body className={inter.className}>{children}</body>
      </html>
    </LanguageProvider>
  );
}
