import type { Metadata } from "next";
import "./globals.css";
import Navbar1 from "@/components/navbar";

import { Geist } from 'next/font/google'
 
const geist = Geist({
  subsets: ['latin'],
})

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
    <html lang="en">
      <body
        className={`${geist.className} antialiased`}
      >
        <Navbar1/>
        {children}
      </body>
    </html>
  );
}
