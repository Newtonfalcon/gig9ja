
import { DM_Sans, Outfit } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const outfit = Outfit({ 
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata = {
  title: 'gig9ja - Find gigs, build your future',
  description: 'Connect with opportunities and grow your career with gig9ja',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${outfit.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}