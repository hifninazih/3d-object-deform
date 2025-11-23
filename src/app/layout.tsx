import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "3D Object Deform",
  description: "3D Object Deform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
