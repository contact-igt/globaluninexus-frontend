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
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "uf3p0w08ff")`}} />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
