"use client";

import { DiscordLogo, GithubLogo, GoogleLogo } from "@phosphor-icons/react";
import { Button } from "@nextui-org/button";
import { signIn } from "next-auth/react";
import { Image } from "@nextui-org/image";
export default function Connexion() {
  return (
    <>
      <div className="h-[100svh]">
        <h1 className="text-center text-2xl px-5 mt-12 mb-8 font-bold md:mt-24 md:text-3xl md:mb-8 lg:mb-12">
          Rejoignez Garry's Mod Creators
        </h1>
        <p className="px-8 text-center text mb-8 md:mb-12 lg:mb-20">
          Connectez vous sur Garry's Mod Creators à l'aide de la méthode que
          vous souhaitez !
        </p>
        <div className="flex flex-col w-64 mx-auto gap-8 md:w-80 lg:flex-row lg:w-full lg:justify-center lg:gap-14">
          <Button
            className="py-6 border-3 border-red-400 bg-opacity-0 text-red-600 text-base font-bold flex gap-3 hover:scale-105"
            onClick={() => signIn("google", { callbackUrl: "/user" })}
          >
            Connexion avec
            <Image
              src="/google_logo.png"
              width={45}
              height={32}
              alt="discord logo"
              className="w-8"
            />
          </Button>
          <Button
            className="py-6 border-3 border-blue-400 bg-opacity-0 text-blue-600 text-base font-bold flex gap-3 hover:scale-105"
            onClick={() => signIn("github", { callbackUrl: "/user" })}
          >
            Connexion avec
            <Image
              src="/github_logo.png"
              width={45}
              height={32}
              alt="discord logo"
              className="w-8"
            />
          </Button>
          <Button
            className="py-6 border-3 border-violet-400 bg-opacity-0 text-violet-600 text-base font-bold flex gap-3 hover:scale-105"
            onClick={() => signIn("discord", { callbackUrl: "/user" })}
          >
            Connexion avec
            <Image
              src="/discord_logo.png"
              width={45}
              height={32}
              alt="discord logo"
              className="w-8"
            />
          </Button>
        </div>
        <Image src="/bg-connexion.jpg" width={1920} height={1080} alt="bg garry's mod" className="hidden lg:block mt-24 w-3/4 mx-auto h-56 object-cover xl:mt-32 xl:h-64" />
      </div>
    </>
  );
}
