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
