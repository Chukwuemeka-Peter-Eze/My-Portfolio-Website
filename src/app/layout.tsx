import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Chukwuemeka Peter Eze | Cloud Security & DevOps Engineer",
    template: "%s | Chukwuemeka Peter Eze",
  },
  description:
    "Cloud Security & DevOps Engineer specializing in AWS, Kubernetes, Terraform, DevSecOps, Infrastructure as Code, and Platform Engineering. Open to remote and global opportunities.",
  keywords: [
    "Cloud Security Engineer",
    "DevOps Engineer",
    "Platform Engineer",
    "AWS",
    "Kubernetes",
    "Terraform",
    "DevSecOps",
    "Infrastructure as Code",
    "Nigeria",
    "Remote",
  ],
  authors: [{ name: "Chukwuemeka Peter Eze" }],
  creator: "Chukwuemeka Peter Eze",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chukwuemekapetereze.online",
    siteName: "Chukwuemeka Peter Eze",
    title: "Chukwuemeka Peter Eze | Cloud Security & DevOps Engineer",
    description:
      "Designing secure, scalable cloud infrastructure using AWS, Kubernetes, Terraform, DevSecOps, and Platform Engineering best practices.",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Chukwuemeka Peter Eze - Cloud Security & DevOps Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chukwuemeka Peter Eze | Cloud Security & DevOps Engineer",
    description:
      "Designing secure, scalable cloud infrastructure using AWS, Kubernetes, Terraform, DevSecOps, and Platform Engineering best practices.",
    images: ["/images/profile.jpg"],
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}