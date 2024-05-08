"use client";

import { Button } from "@nextui-org/button";
import {
  Code,
  BracketsCurly,
  Palette,
  VectorThree,
  UsersFour,
  Basket,
  CaretDown,
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <div className="relative h-screen bg-black bg-opacity-50">
          <h1 className="text-5xl font-bold text-center pt-16 sm:pt-40 text-white px-5">
            Garry’s Mod Creators
          </h1>
          <p className="text-white text-center text-xl mt-6">
            Construisez ce dont vous rêvez
          </p>

          <div className="flex justify-center items-center mt-16 gap-8 sm:gap-14 text-white flex-wrap px-8">
            <div className="text-violet-400 flex flex-col items-center gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-violet-400 bg-opacity-50 rounded-xl flex justify-center items-center">
                <Code className="text-2xl sm:text-3xl" />
              </div>
              <span className="text-sm sm:text-base">Dev Web</span>
            </div>
            <div className="text-orange-400 flex flex-col items-center gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-400 bg-opacity-50 rounded-xl flex justify-center items-center">
                <BracketsCurly className="text-2xl sm:text-3xl" />
              </div>
              <span className="text-sm sm:text-base">Config gLua</span>
            </div>
            <div className="text-blue-400 flex flex-col items-center gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-400 bg-opacity-50 rounded-xl flex justify-center items-center">
                <Palette className="text-2xl sm:text-3xl" />
              </div>
              <span className="text-sm sm:text-base">Graphisme</span>
            </div>
            <div className="text-red-400 flex flex-col items-center gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-400 bg-opacity-50 rounded-xl flex justify-center items-center">
                <VectorThree className="text-2xl sm:text-3xl" />
              </div>
              <span className="text-sm sm:text-base">Mapping</span>
            </div>
            <div className="text-green-400 flex flex-col items-center gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-400 bg-opacity-50 rounded-xl flex justify-center items-center">
                <UsersFour className="text-2xl sm:text-3xl" />
              </div>
              <span className="text-sm sm:text-base">Config Discord</span>
            </div>
          </div>

          <p className="text-white text-center mt-7 text-xs px-5">
            Les services que nous proposons actuellement, ces services sont
            susceptibles d’évoluer.
          </p>
          <div className="w-full flex justify-center">
            <Button
              className="bg-violet-600 bg-opacity-50 text-white mt-14"
              as={Link}
              href="/shop"
            >
              <Basket size={24} />
              Découvrir la boutique
            </Button>
          </div>
          <Link href="https://discord.gg/rvzyZVqdDs" target="_blank">
            <div className="hidden text-white lg:flex gap-3 items-center bg-black h-12 w-72 absolute left-0 pl-12 rounded-tr-full rounded-br-full">
              <span>Rejoignez nous sur</span>
              <Image
                className="w-auto h-6"
                src="/discord_logo.png"
                alt="discord logo"
                width={42}
                height={35}
              />
            </div>
          </Link>
          <div className="w-full flex justify-center mt-20">
          <CaretDown color="white" size={32} />
          </div>

          <video
            autoPlay
            loop
            muted
            className="-z-10 absolute object-cover w-full h-full top-0 left-0"
          >
            <source src="/bg-video-gmc-home.mp4" type="video/mp4" />
          </video>
        </div>
      </header>
    </>
  );
}
