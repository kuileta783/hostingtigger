import GoogleAnalytics from '@/components/GoogleAnalytics';

   export default function RootLayout({
     children,
   }: {
     children: React.ReactNode;
   }) {
     return (
       <html lang="zh-CN">
         <head>
           <title>Hostingtigger | Best Web Hosting Reviews</title>
         </head>
         <body>
           <GoogleAnalytics measurementId="G-5JO6YYPWHL" />
           {children}
         </body>
       </html>
     );
   }