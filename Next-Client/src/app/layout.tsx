import { ThemeProvider } from "@/Components/ThemeProvider";
import { getGlobalPageData } from "@/data";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full Stack Next Strapi",
  description: "Full Stack Next.JS Strapi",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const globalData = await getGlobalPageData();

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar data={globalData.header} />
          {children}
          <Footer data={globalData.footer} />
        </ThemeProvider>
      </body>
    </html>
  )
};