import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// COMPONENTS
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Floating from "@/components/Floating"; // ✅ add this

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vijay Agency | Roofing Solutions",
  description: "Premium roofing and decorative sheet solutions since 1982",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        {/* NAVBAR */}
        <Navbar />

        {/* MAIN CONTENT */}
        <main className="flex-grow">
          {children}
        </main>

        {/* FLOATING BUTTONS */}
        <Floating />  {/* ✅ correct place */}

        {/* FOOTER */}
        <Footer />

      </body>
    </html>
  );
} 