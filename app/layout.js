import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar.js"
import Footer from "@/components/Footer.js"
import SessionWrapper from "@/components/SessionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Get Me A chai",
  description: "The Taste - Ayee Hyee",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SessionWrapper>
        <Navbar/>
        <div className="min-h-screen">
        {children}
        </div>
        <Footer/>
        </SessionWrapper>
      </body>
    </html>
  );
}
