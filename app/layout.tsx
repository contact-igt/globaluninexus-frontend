import './globals.css';
import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const outfit = Outfit({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'UniNexus Traders - Connecting India\'s Finest Agricultural Produce with the World',
  description: 'UniNexus Traders Pvt. Ltd. delivers fresh, authentic, and globally certified agricultural products directly from trusted farmers to your business.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
