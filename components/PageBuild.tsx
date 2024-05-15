"use client";

import { Button } from "@nextui-org/button";
import { SmileyWink } from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";

export default function PageBuild() {
  return (
    <>
      <div className="h-[100svh] flex flex-col justify-center items-center gap-5">
        <h1 className="text-center text-2xl px-8 font-semibold text-violet-600">
          Cette page est en cours de création par nos développeurs, revenez plus
          tard{" "}
        </h1>
        <SmileyWink className="text-violet-600 mb-16" size={50} />
        <Button as={Link} href="/" className="bg-red-400 text-white text-lg py-6 px-12">
            Retournez à l'accueil
        </Button>
      </div>
    </>
  );
}
