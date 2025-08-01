import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Keyword Counter",
  description: "A simple keyword counter application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
