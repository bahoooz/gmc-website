import "@/styles/globals.css";
import { Metadata } from "next";
import { Raleway } from "next/font/google";
import NavbarComponent from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";
import { Analytics } from '@vercel/analytics/react';

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Garry's Mod Creators",
    template: `Garry's Mod Creators - Services Gmod`,
  },
  description: "description",
  icons: {
    icon: "/logo_gmc.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionWrapper>
      <html lang="fr" suppressHydrationWarning>
        <head />
        <body className={raleway.className}>
          <NavbarComponent />
          {children}
          <Analytics />
          <Footer />
        </body>
      </html>
    </SessionWrapper>
  );
}
