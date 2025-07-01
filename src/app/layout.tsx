import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hostingtigger | Best Web Hosting Reviews",
  description: "Compare the best web hosting services. We test speed, uptime, customer support, and value to help you make the best choice.",
  verification: {
    other: {
      'verify-yeahpromos': 'd6420582b120',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
