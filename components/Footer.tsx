import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-16 xl:p-32">
      <h3 className="text-green-300 text-center mb-8 text-lg md:mb-16 xl:text-start xl:text-xl">Garry's Mod Creators / GMC - Construisez ce dont vous rêvez.</h3>
      <div className="flex flex-col gap-8 items-center md:items-start md:gap-16 xl:flex-row xl:gap-0 xl:items-end xl:justify-between">
        <div className="flex flex-col text-center gap-4 underline underline-offset-4 text-lg md:text-start">
          <Link className="decoration-red-400 decoration-2" href="/">Accueil</Link>
          <Link className="decoration-blue-400 decoration-2" href="/shop">Boutique</Link>
          <Link className="decoration-orange-400 decoration-2" href="/contact">Nous contacter</Link>
          <Link className="decoration-violet-400 decoration-2" href="/discord-community">La communauté sur Discord</Link>
        </div>
        <div className="flex flex-col text-center gap-4 md:flex-row md:justify-between md:w-full xl:gap-2 xl:flex-col xl:items-start xl:text-start xl:w-fit">
            <Link href="#" className="underline underline-offset-4">CGU / CGV</Link>
            <span>Copyright © Garry's Mod Creators 2024. Tout droit réservé.</span>
        </div>
        <Image src="/logo_gmc.png" width={120} height={120} alt="logo GMC" className="w-16 2xl:w-24" />
      </div>
    </footer>
  );
}
