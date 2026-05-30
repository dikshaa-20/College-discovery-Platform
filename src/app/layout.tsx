import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layouts/Navbar";

export const metadata: Metadata = {
  title: "College Discovery",
  description: "Find and compare colleges",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}