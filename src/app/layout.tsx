import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Finbase Frontend",
  description: "Personal Finance & Property Management Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}

