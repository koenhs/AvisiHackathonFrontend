"use client";

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Header} from "@/components/Header";
import {usePathname} from "next/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();
  return (
    <html lang="en">
    <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
    <div className="flex flex-col">
      {pathname !== '/login' && <Header/>}
        {/*<Sidebar/>*/}
        {children}
    </div>
    </body>
    </html>
);
}
