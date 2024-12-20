import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
// import { headers } from "next/headers";
// import ContextProvider from "@/context";


const geistSans = localFont({
  src: "/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Real Estate and Pirates",
  description: "the story that was never told: pirates and real estate mini app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // const allHeaders = await headers();
  // const cookies = allHeaders.get('cookie');

  return (
    <html lang="en">
      <head> 
        <Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive" />
        </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
                {/* <ContextProvider cookies={cookies}>{children}</ContextProvider> */}
                {children}
      </body>
    </html>
  );
}
