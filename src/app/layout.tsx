import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar-dropdown/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="antialiased">
      {/* <html lang="pt-br" className="antialiased dark:bg-gray-950"> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Sidebar />
        <main className="lg:pl-72">{children}</main>
      </body>
    </html>
  );
}
