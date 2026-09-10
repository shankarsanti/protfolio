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
    default: "Shankar Santi | Data Scientist",
    template: "%s | Shankar Santi"
  },
  description: "Data Scientist and Full Stack Developer specializing in Python, Machine Learning, Deep Learning, Gen AI, Power BI, and Web Development. Available for freelance projects and full-time opportunities.",
  keywords: [
    "Shankar Santi",
    "SHANKAR LAXMAN SANTI",
    "Data Scientist",
    "Machine Learning",
    "Deep Learning",
    "Gen AI",
    "Power BI",
    "Full Stack Developer",
    "Python Developer",
    "React.js Developer",
    "Node.js Developer",
    "MongoDB",
    "Django Developer",
    "JavaScript Developer",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Shankar Laxman Santi", url: "https://www.shankarsanti.online" }],
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
    title: "Shankar Santi | Data Scientist",
    description: "Data Scientist and Full Stack Developer specializing in Python, Machine Learning, Deep Learning, Gen AI, and Web Technologies.",
    siteName: "Shankar Santi Portfolio",
    images: [
      {
        url: '/shankar.png',
        width: 1200,
        height: 630,
        alt: 'Shankar Santi - Data Scientist',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shankar Santi | Data Scientist",
    description: "Data Scientist and Full Stack Developer specializing in Python, Machine Learning, Deep Learning, Gen AI",
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
