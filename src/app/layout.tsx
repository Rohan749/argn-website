import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik, Anton, Jura } from "next/font/google";
import "./globals.css";
import LeftPanel from "@/components/reusable/LeftPanel";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});


const sync = Jura({
  variable: "--font-custom",
  subsets: ["latin"],
  weight: ["400", "700"]
});
export const metadata: Metadata = {
  title: {
    default: 'ARGNUI – Lightweight GSAP Powered UI Components',
    template: '%s | Argn UI',
  },
  description:
    'ARGNUI is a lightweight animation-first UI component library built with Next.js, GSAP, and Tailwind CSS. Designed for modern, performant, and delightful user interfaces.',
  metadataBase: new URL('https://www.argnui.com'), // change to your domain
  keywords: [
    'ARGNUI',
    'GSAP UI Library',
    'Next.js UI components',
    'Animated UI',
    'Tailwind UI kit',
    'Frontend animation library',
  ],
  authors: [
    {
      name: 'Rohan Pandey',
      url: 'https://www.rohanpandey.dev', // replace with your personal site if any
    },
  ],
  creator: 'Rohan Pandey',
  openGraph: {
    title: 'ARGNUI – GSAP-Powered Animated Components',
    description:
      'Discover Argn UI, the lightweight and animation-focused UI kit using GSAP + Next.js + Tailwind. Build fast, fluid, and modern UIs effortlessly.',
    url: 'https://www.argnui.com',
    siteName: 'ARGNUI',

    locale: 'en_US',
    type: 'website',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${anton.variable} ${geistMono.variable} ${rubik.variable} ${sync.variable}  antialiased `}>
        <div className="flex gap-5 h-full w-full ">
          <LeftPanel />
          <div  className="fixed bg_container"/>
          <div className={`xl:ml-50 w-full p-2.5 wrapper xl:mt-20 mt-25 overflow-hidden`}>
            {children}
            </div>
        </div>
      </body>
    </html>
  );
}
