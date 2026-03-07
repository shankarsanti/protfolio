import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shankar Santi | Full Stack Developer",
  description: "Full Stack Developer specializing in React.js, Node.js, and MongoDB. Building responsive, scalable web applications.",
  keywords: ["Shankar Santi", "Full Stack Developer", "React.js", "Node.js", "MongoDB", "Web Developer", "Portfolio"],
  authors: [{ name: "Shankar Laxman Santi" }],
  creator: "Shankar Laxman Santi",
  icons: {
    icon: '/shiva.png',
    apple: '/shiva.png',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shankarsanti.dev",
    title: "Shankar Santi | Full Stack Developer",
    description: "Full Stack Developer specializing in React.js, Node.js, and MongoDB",
    siteName: "Shankar Santi Portfolio",
    images: [
      {
        url: '/shankar.png',
        width: 1200,
        height: 630,
        alt: 'Shankar Santi',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shankar Santi | Full Stack Developer",
    description: "Full Stack Developer specializing in React.js, Node.js, and MongoDB",
    images: ['/shankar.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
