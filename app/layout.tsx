import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "react-hot-toast";
import { StructuredData } from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.shankarsanti.online'),
  title: {
    default: "Shankar Santi | Full Stack Developer",
    template: "%s | Shankar Santi"
  },
  description: "Full Stack Developer specializing in React.js, Node.js, MongoDB, and Django. Building responsive, scalable web applications with modern technologies. Available for freelance projects and full-time opportunities.",
  keywords: [
    "Shankar Santi",
    "Shankar Laxman Santi",
    "Full Stack Developer",
    "React.js Developer",
    "Node.js Developer",
    "MongoDB",
    "Express.js",
    "Django Developer",
    "Python Developer",
    "JavaScript Developer",
    "TypeScript",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack",
    "Portfolio",
    "Belagavi Developer",
    "Karnataka Developer",
    "India Developer",
    "Pharmacy Management System",
    "Dairy Management System",
    "Nighan2 Labs",
    "BCA Student",
    "Rani Channamma University",
    "Web Application Development",
    "RESTful API",
    "MySQL",
    "Tailwind CSS",
    "Git",
    "GitHub",
  ],
  authors: [{ name: "Shankar Laxman Santi", url: "https://shankarsanti.dev" }],
  creator: "Shankar Laxman Santi",
  publisher: "Shankar Laxman Santi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/shiva.png',
    apple: '/shiva.png',
    shortcut: '/shiva.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.shankarsanti.online",
    title: "Shankar Santi | Full Stack Developer",
    description: "Full Stack Developer specializing in React.js, Node.js, MongoDB, and Django. Building responsive, scalable web applications.",
    siteName: "Shankar Santi Portfolio",
    images: [
      {
        url: '/shankar.png',
        width: 1200,
        height: 630,
        alt: 'Shankar Santi - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shankar Santi | Full Stack Developer",
    description: "Full Stack Developer specializing in React.js, Node.js, MongoDB, and Django",
    creator: "@shankarsanti",
    images: ['/shankar.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: 'https://www.shankarsanti.online',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
