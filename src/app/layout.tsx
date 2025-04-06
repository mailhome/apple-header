import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/desktop/navbar";

const inter = Inter({
  subsets: ["latin"]
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
        className={`${inter.className} flex flex-col min-h-screen antialiased`}
      >
        <Navbar />
        <div className="flex flex-col flex-1 items-center justify-center bg-white text-black dark:text-neutral-100 dark:bg-neutral-900">
          {children}
        </div>

      </body>
    </html>
  );
}
