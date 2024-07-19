import { ThemeProvider } from "@/Components/ThemeProvider";
import Navbar from "@/Components/Navbar";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.JS JWT Authentication",
  description: "Next.JS UseActionState Hooks & Cookies Authentication"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <body className={`${inter.className}`}>
          <Navbar />
          <div className={`bg-gray-1100 bg-[url("/grid.svg")]`}>
            {children}
          </div>
        </body>
      </ThemeProvider>
    </html>
  )
};