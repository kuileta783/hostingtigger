import GoogleAnalytics from '@/components/GoogleAnalytics';
import "./globals.css";
import ClientBody from "./ClientBody";

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="zh-CN">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Hostingtigger | Best Web Hosting Reviews</title>
          <GoogleAnalytics measurementId="G-5JO6YYPWHL" />
        </head>
        <body>
          <ClientBody>{children}</ClientBody>
        </body>
      </html>
    );
  }