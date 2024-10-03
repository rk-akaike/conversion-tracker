"use client";

import { useEffect } from "react";
import Script from "next/script";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: [string, ...unknown[]]) {
      window.dataLayer.push(args);
    };
    window.gtag("js", new Date());
    window.gtag("config", "GTM-NKWDQD7T");
  }, []);

  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=GTM-NKWDQD7T`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(...args) { dataLayer.push(args); }
              gtag('js', new Date());
              gtag('config', 'GTM-NKWDQD7T');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
