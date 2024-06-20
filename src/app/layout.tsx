import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageHeader from "@/components/page-header";
import PageFooter from "@/components/page-footer";
import { ClerkProvider } from "@clerk/nextjs";
import { NextAuthProvider } from "@/providers/next-auth-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WhoWho",
  description: "Music Review",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <NextAuthProvider>
        <html lang="en" className="bg-neutral-950">
          <body
            className={`${inter.className} bg-gradient-to-t from-neutral-950 to-neutral-900 text-neutral-50`}
          >
            <PageHeader />
            <div className="my-10">{children}</div>
            <PageFooter />
          </body>
        </html>
      </NextAuthProvider>
    </ClerkProvider>
  );
}
