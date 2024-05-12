"use client";

import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Warning } from "@phosphor-icons/react";
import Link from "next/link";

export default function CardOffer({
  title,
  info_title,
  liste,
  price,
  outlineColor,
  displayBestOffer,
}: any) {
  return (
    <div className="relative">
      <Card
        isBlurred
        className={
          displayBestOffer == true
            ? `hidden absolute rounded-2xl -top-24 -translate-x-1/2 left-1/2 z-10 w-full h-16 justify-center bg-violet-600 text-white uppercase font-bold xl:flex 2xl:text-lg`
            : "hidden"
        }
      >
        <span className="text-center">Meilleur Rapport Qualité / Prix</span>
      </Card>
      <Card
        className={`relative w-80 flex flex-col items-center text-center px-4 2xl:w-[380px] 2xl:px-8 ${outlineColor}`}
      >
        <div className="text-center mt-8 mb-4">
          <h2 className="text-2xl uppercase font-bold text-red-400">{title}</h2>
          <span className="text-2xl uppercase text-blue-400 font-bold">
            {info_title}
          </span>
        </div>
        <p className="text-violet-600 font-bold text-sm mb-4">
          -20% de réduction pour votre première commande
        </p>
        <h3 className="w-full text-start text-blue-400 font-bold mb-4">
          Cette offre contient :
        </h3>
        <ul className="text-start text-base mb-8 flex flex-col gap-2">
          {liste}
        </ul>
        <Divider className="bg-violet-500 mb-8" />
        <div className="mb-8">
          <span className="text-violet-500">Avantages sur le Discord</span>
          <ul className="text-start mt-4 text-violet-500 flex flex-col gap-2">
            <li>un rôle client à vie</li>
            <li>un accès à nos futurs giveaways clients</li>
            <li>un code promotionnel de -25% tous les 3 mois</li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-2 mb-8">
          <Warning size={32} className="text-violet-400" weight="light" />
          <p>
            Dès l’instant où vous effectuez une commande, nous vous prenons en
            charge.{" "}
          </p>
        </div>
        <Button
          as={Link}
          href=""
          className="bg-violet-600 text-white text-base mb-8 w-full h-12 flex justify-between"
        >
          Acheter <span>{price}€</span>
        </Button>
      </Card>
    </div>
  );
}
