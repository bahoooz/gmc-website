import "@/styles/globals.css";
import { Metadata } from "next";
import { fontMono } from "@/config/fonts";
import { Raleway } from "next/font/google";
import clsx from "clsx";
import NavbarComponent from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";

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
    <html lang="fr" suppressHydrationWarning>
      <head />
      <body className={raleway.className}>
        <SessionProvider>
          <NavbarComponent />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
