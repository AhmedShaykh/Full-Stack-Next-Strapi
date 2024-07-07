import { ReactNode } from "react";
import { ThemeProvider } from "@/Components/ThemeProvider";
import ModalProvider from "@/Components/ModalProvider";
import Navbar from "@/Components/Navbar";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.JS Supabase",
  description: "Full Stack Next.JS Supabase App"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ModalProvider>
            <Navbar />
            {children}
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  )
};