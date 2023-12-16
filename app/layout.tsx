import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./comps/Layout/Header";
import Footer from "./comps/Layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Feelstar",
  description: "반려견에게 최고를 주도록 필스타가 함께 합니다",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
