import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joel Mathew",
  description: "Joel Mathew's portfolio website.",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
