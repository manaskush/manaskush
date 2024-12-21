import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "👨‍💻 Manas Kush | Fullstack Developer",
  description: "Just a developer who loves to code and learn new things.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
