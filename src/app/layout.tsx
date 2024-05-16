import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";

const urbanist = Urbanist({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Attire Clothing Store",
  description: "Attire is a ecommerce clothing store for your lifestyle fashions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={urbanist.className}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
