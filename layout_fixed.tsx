import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en">
      <head>
        {gaMeasurementId && (
          <>
            <Script
              src={"https://www.googletagmanager.com/gtag/js?id=" + gaMeasurementId}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '');}
            </Script>
          </>
        )}
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
