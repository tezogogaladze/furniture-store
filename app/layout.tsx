import type { Metadata } from "next";
import { LenisProvider } from "@/lib/lenis";
import "./globals.css";

export const metadata: Metadata = {
  title: "კაზა ტუა • Casa Tua — დახვეწილი ავეჯი, შექმნილი ნამდვილი ცხოვრებისთვის.",
  description:
    "ჩვენ ვქმნით დახვეწილ ავეჯს ნამდვილი ცხოვრებისთვის. ჩვენი თანამედროვე ნაწარმი არის თბილი და მყუდრო.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@700;800&display=swap" rel="stylesheet" />
      </head>
      <body
        className="min-h-full antialiased"
        style={{
          background: "var(--bg)",
          color: "var(--fg)",
          fontFamily: "var(--font-body)",
        }}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
