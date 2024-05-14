import "@/styles/globals.css";
import { Metadata } from "next";
import { Raleway } from "next/font/google";
import NavbarComponent from "@/components/Navbar";
import Footer from "@/components/Footer";

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
          <NavbarComponent />
          {children}
          <Footer />
      </body>
    </html>
  );
}
