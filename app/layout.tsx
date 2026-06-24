import type {Metadata} from 'next';
import {Inter, Playfair_Display} from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Modi Dental Clinic | Premium Dental Care in Ahmedabad',
  description: 'Creating Beautiful Smiles With Advanced Dental Care. Rated 4.9★ in Shela, Ahmedabad.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#050505] text-white selection:bg-teal-500/30 overflow-x-hidden" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
