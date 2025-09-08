import GoogleAnalytics from '@/components/GoogleAnalytics';

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
          {children}
        </body>
      </html>
    );
  }