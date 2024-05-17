/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Tooltip } from "@nextui-org/tooltip";
import { Divider } from "@nextui-org/divider";
import {
  Code,
  BracketsCurly,
  Palette,
  Basket,
  CaretDown,
  DiscordLogo,
  EnvelopeSimple,
  Warning,
  ArrowDown,
  UsersThree,
  Gavel,
} from "@phosphor-icons/react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <div className="relative min-h-screen h-[800px] bg-black bg-opacity-50">
          <h1 className="text-3xl smallsm:text-5xl font-bold text-center pt-16 sm:pt-40 text-white px-5">
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
                <Gavel className="text-2xl sm:text-3xl" />
              </div>
              <span className="text-sm sm:text-base">Mapping</span>
            </div>
            <div className="text-green-400 flex flex-col items-center gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-400 bg-opacity-50 rounded-xl flex justify-center items-center">
                <DiscordLogo className="text-2xl sm:text-3xl" />
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

          <div className="w-full flex justify-center mt-20">
            <Link href="#first_content">
              <CaretDown color="white" size={32} />
            </Link>
          </div>

          <video
            autoPlay
            loop
            muted
            playsInline
            className="-z-10 absolute object-cover w-full h-full top-0 left-0"
          >
            <source src="/bg-video-gmc-home.mp4" type="video/mp4" />
          </video>
        </div>
      </header>
      <section id="first_content" className="bg-gray-800 py-12 lg:py-28">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center xl:items-end gap-16 lg:gap-32 xl:gap-52">
          <div className="px-12 smallsm:px-0 smallsm:w-96 sm:w-[520px] xl:w-[550px] text-white">
            <div className="text-center justify-center lg:justify-start flex flex-col smallsm:flex-row smallsm:items-end gap-6 mb-14">
              <span className="text-violet-600 text-6xl">1.</span>
              <h2 className="text-3xl smallsm:text-4xl xl:text-5xl">
                Qui sommes-nous ?
              </h2>
            </div>
            <div className="text-justify">
              <p className="mb-5 xl:text-base">
                Garry's Mod Creators est une{" "}
                <span className="text-violet-400">
                  structure de services contre rémunération
                </span>{" "}
                basée sur le jeu vidéo Garry's Mod sorti en 2006, nous avons
                pour mission principale de proposer des services aux joueurs de
                la communauté désirant créer du contenu sur Garry's Mod. Pour
                cela nous gérons une équipe compétente qui propose les services
                suivants :{" "}
                <span className="text-violet-400">développement web</span>,{" "}
                <span className="text-violet-400">configuration glua</span>,{" "}
                <span className="text-violet-400">graphisme</span>,{" "}
                <span className="text-violet-400">mapping</span>, et{" "}
                <span className="text-violet-400">
                  configuration de serveur discord
                </span>
                . Nous avons pour but d'aider la communauté à continuer
                d'alimenter le contenu de ce jeu en créant des serveurs, des
                addons, des sites web, des interfaces pour les addons et les
                sites webs, des idendités graphiques etc... Nous vous proposons
                tout cela à des{" "}
                <span className="text-violet-400">
                  prix défiant toute concurrence
                </span>
                , nous souhaitons mettre à disponibilité nos talents chez
                Garry's Mod Creators à un{" "}
                <span className="text-violet-400">
                  prix le plus abordable possible
                </span>
                .
              </p>
              <p className="xl:text-base">
                Nous vous invitons à aller découvrir notre{" "}
                <span className="text-violet-400">boutique</span> ainsi que
                rejoindre notre{" "}
                <span className="text-violet-400">serveur discord</span> juste
                en-dessous. Toute notre communauté est basée là bas, et il est
                également{" "}
                <span className="text-violet-400">
                  nécessaire d'être présent sur le serveur discord pour
                  effectuer une commande
                </span>
                , nous gérons tout directement sur Discord. Je vous souhaite une{" "}
                <span className="text-violet-400">bonne découverte de GMC</span>
                , si vous avez une question particulière,{" "}
                <span className="text-violet-400">
                  demandez-nous sur Discord ou contactez-nous directement
                </span>{" "}
                :)
              </p>
              <div className="flex justify-center lg:justify-start items-center gap-6 mt-8">
                <div className="flex gap-6">
                  <Link
                    className="w-10 h-10 bg-violet-600 rounded-full flex justify-center items-center hover:scale-110 transition-all"
                    href="https://discord.gg/rvzyZVqdDs"
                    target="_blank"
                  >
                    <Tooltip
                      className="bg-violet-400 text-white"
                      content="Discord"
                      placement="bottom"
                      offset={15}
                    >
                      <DiscordLogo size={26} />
                    </Tooltip>
                  </Link>
                  <Link
                    className="w-10 h-10 bg-red-400 rounded-full flex justify-center items-center hover:scale-110 transition-all"
                    href="/shop"
                  >
                    <Tooltip
                      className="bg-red-400 text-white"
                      content="Boutique"
                      placement="bottom"
                      offset={15}
                    >
                      <Basket size={26} />
                    </Tooltip>
                  </Link>
                  <Link
                    className="w-10 h-10 bg-blue-400 rounded-full flex justify-center items-center hover:scale-110 transition-all"
                    href="/contact"
                  >
                    <Tooltip
                      className="bg-blue-400 text-white"
                      content="Nous contacter"
                      placement="bottom"
                      offset={15}
                    >
                      <EnvelopeSimple size={26} />
                    </Tooltip>
                  </Link>
                </div>
                <div className="hidden lg:flex gap-7">
                  <div className="h-1 w-[31px] xl:w-9 bg-violet-600"></div>
                  <div className="h-1 w-[31px] xl:w-9 bg-violet-600"></div>
                  <div className="h-1 w-[31px] xl:w-9 bg-violet-600"></div>
                  <div className="h-1 w-[31px] xl:w-9 bg-violet-600"></div>
                  <div className="h-1 w-[31px] xl:w-9 bg-violet-600"></div>
                  <div className="h-1 w-[31px] xl:w-9 bg-violet-600"></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image
              className="hidden lg:flex w-auto h-[450px] lg:h-[400px] xl:h-[550px]"
              isBlurred
              src="/img_section_1.png"
              alt="image section"
            />
            <Image
              className="flex lg:hidden h-auto w-80 smallsm:w-96 sm:w-[450px]"
              isBlurred
              src="/img_section_1_mobile.png"
              alt="image section"
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-800 py-12 lg:py-28">
        <div className="hidden md:flex justify-center items-center gap-32 xl:gap-48">
          <div className="text-white">
            <div className="flex flex-col justify-center text-center lg:justify-start lg:text-start smallsm:flex-row smallsm:items-end gap-6 mb-5">
              <span className="text-blue-400 text-6xl">2.</span>
              <h2 className="text-3xl smallsm:text-4xl xl:text-5xl">
                Comment ça marche ?
              </h2>
            </div>
            <p className="text-center lg:text-start mx-[8%] md:mx-0 mb-9 px-7 md:px-0">
              Vous l’avez bien compris Garry’s Mod Creators est une solution
              vous permettant de <br className="hidden md:block" /> créer du
              contenu autour du célèbre jeu Garry’s Mod
            </p>
            <h3 className="px-6 sm:px-0 text-center lg:text-start text-blue-400 underline underline-offset-4 text-xl mb-9">
              Mais alors comment on passe commande concrètement ?
            </h3>
            <div className="mx-10 w-fit sm:w-[500px] sm:mx-auto md:mx-0 md:w-[630px] xl:w-[680px] border-2 border-blue-400 p-5 rounded-2xl">
              <div className="flex-col text-center sm:text-start sm:flex-row flex items-center gap-3 mb-4">
                <Warning size={32} className="text-blue-400" />
                <h3 className="text-xl">
                  C’est très simple mais avant tout voici une petite précision :
                </h3>
              </div>
              <p className="text-center w-fit sm:text-start">
                Pour passer commande sur le site,{" "}
                <span className="text-blue-400 underline underline-offset-4">
                  vous devez obligatoirement être sur le discord
                </span>
                , car c’est là bas que vous serez mit en relation avec notre
                équipe qui se chargera de mener a bien la réalisation de votre
                commande, vous pouvez rejoindre directement le discord ici.
              </p>
            </div>
            <div className="flex justify-center">
              <ArrowDown
                size={54}
                className="text-blue-400 my-8"
                weight="light"
              />
            </div>
            <p className="text-center lg:text-start mx-auto md:mx-0 md:w-[630px] xl:w-[680px] mb-9">
              Une fois que vous êtes bien sur le discord de GMC, rien de plus
              simple. Vous devez vous{" "}
              <span className="text-blue-400 underline underline-offset-4">
                inscrire
              </span>{" "}
              sur notre site, rendez-vous ensuite sur la page avec tous les
              services disponibles, puis choississez ce qui correspond le plus a
              votre besoin et laissez-vous guider 😀
            </p>
            <div className="flex justify-center">
              <Button
                className="w-[500px] md:w-full text-white bg-blue-600"
                as={Link}
                href="/shop"
              >
                <Basket size={24} /> Découvrir la boutique
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex flex-col  lg:items-center xl:items-end xl:justify-center gap-5">
            <div className="text-violet-400 flex lg:flex-col-reverse xl:flex-row items-center gap-7">
              <span className="text-sm">Rejoindre le Discord</span>
              <div className="w-24 h-24 border-dashed border-3 rounded-full flex justify-center items-center border-violet-400">
                <DiscordLogo size={56} weight="light" />
              </div>
            </div>
            <div className="h-32 border border-blue-400 border-dashed xl:mr-12 "></div>
            <div className="text-orange-400 flex lg:flex-col-reverse xl:flex-row items-center gap-7">
              <span className="text-sm">Choississez dans la boutique</span>
              <div className="w-24 h-24 border-dashed border-3 rounded-full flex justify-center items-center border-orange-400">
                <Basket size={56} weight="light" />
              </div>
            </div>
            <div className="h-32 border border-blue-400 border-dashed xl:mr-12"></div>
            <div className="text-red-400 flex lg:flex-col-reverse xl:flex-row items-center gap-7">
              <span className="text-sm">On s’occupe du reste</span>
              <div className="w-24 h-24 border-dashed border-3 rounded-full flex justify-center items-center border-red-400">
                <UsersThree size={56} weight="light" />
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden text-white text-center">
          <div className="flex flex-col items-center gap-6 mb-6">
            <span className="text-blue-400 text-6xl">2.</span>
            <h2 className="text-3xl mb-5 px-2">Comment ça marche ?</h2>
          </div>
          <p className="mb-9 px-8">
            Vous l’avez bien compris Garry’s Mod Creators est une solution vous
            permettant de créer du contenu autour du célèbre jeu Garry’s Mod
          </p>
          <h3 className="mb-9 px-8 text-blue-400 text-xl">
            Mais alors comment on passe commande concrètement ?
          </h3>
          <div className="border-2 border-blue-600 mx-8 p-5 rounded-2xl">
            <div className="flex flex-col items-center gap-3 mb-4">
              <Warning size={32} className="text-blue-400" />
              <h3 className="text-xl">
                C’est très simple mais avant tout voici une petite précision :
              </h3>
            </div>
            <p>
              Pour passer commande sur le site,
              <span className="text-blue-400 underline underline-offset-4">
                {" "}
                vous devez obligatoirement être sur le discord
              </span>
              , car c’est là bas que vous serez mit en relation avec notre
              équipe qui se chargera de mener a bien la réalisation de votre
              commande, vous pouvez rejoindre directement le discord ici.
            </p>
          </div>
          <div className="flex justify-center">
            <ArrowDown size={54} className="my-8 text-blue-400" />
          </div>
          <p className="px-8 mb-9">
            Une fois que vous êtes bien sur le discord de GMC, rien de plus
            simple. Vous devez vous{" "}
            <span className="text-blue-400 underline underline-offset-4">
              inscrire
            </span>{" "}
            sur notre site, rendez-vous ensuite sur la page avec tous les
            services disponibles, puis choississez ce qui correspond le plus a
            votre besoin et laissez-vous guider 😀
          </p>
          <div className="px-8">
            <Button
              className="w-full flex gap-3 bg-blue-600 text-white"
              as={Link}
              href="/shop"
            >
              <Basket size={24} /> Découvrir la boutique
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-white py-24 lg:py-28">
        <div>
          <div className="flex flex-col items-center mb-14 gap-6 md:mb-24 md:flex-row md:items-end md:justify-center lg:-ml-[360px] xl:-ml-[410px] xl:mb-28 2xl:mb-32">
            <span className="text-red-400 text-6xl">3.</span>
            <h2 className="text-3xl mb-5 px-2 text-center md:mb-0 md:text-4xl xl:text-5xl">
              Pourquoi nous faire confiance ?
            </h2>
          </div>
          <div className="flex flex-col gap-20 px-8 smallsm:items-center md:gap-28 lg:flex-row lg:flex-wrap lg:justify-center xl:gap-16 xl:flex-nowrap 2xl:gap-36">
            <div className="flex gap-8">
              <div className="flex flex-col items-center gap-5 xl:flex-col-reverse">
                <span className="text-4xl text-red-400">1</span>
                <div className="h-96 w-20 bg-red-400 rounded-xl"></div>
              </div>
              <div className="flex flex-col gap-5 mt-16 smallsm:max-w-80 xl:max-w-64 xl:mt-0 xl:mb-16 xl:justify-end">
                <h4 className="underline underline-offset-4 text-xl">
                  Une prise en charge de A à Z de tous nos clients.
                </h4>
                <p className="text-sm smallsm:text-base md:text-lg xl:text-base">
                  Nous avons à coeur de délivrer la meilleure expérience
                  possible pour nos clients, c’est pour cela que nous prenons en
                  charge nos clients du début de leur commande, jusqu’à que la
                  commande soit 100% terminée et que notre client est satisfait.
                </p>
              </div>
            </div>
            <div className="flex gap-8 xl:mb-28">
              <div className="flex flex-col items-center gap-5">
                <span className="text-4xl text-blue-400">2</span>
                <div className="h-96 w-20 bg-blue-400 rounded-xl"></div>
              </div>
              <div className="flex flex-col gap-5 mt-16 smallsm:max-w-80 xl:max-w-64">
                <h4 className="underline underline-offset-4 text-xl">
                  Une équipe compétente.
                </h4>
                <p className="text-sm smallsm:text-base md:text-lg xl:text-base">
                  Avoir une équipe compétente est extrêmement important pour
                  nous. Nous faisons en sorte de proposer les services que notre
                  équipe maîtrise afin de délivrer une solution qualitative à
                  nos clients.
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex flex-col items-center gap-5 xl:flex-col-reverse">
                <span className="text-4xl text-green-300">3</span>
                <div className="h-96 w-20 bg-green-300 rounded-xl"></div>
              </div>
              <div className="flex flex-col gap-5 mt-16 smallsm:max-w-80 xl:max-w-64 xl:mt-0 xl:mb-16 xl:justify-end">
                <h4 className="underline underline-offset-4 text-xl">
                  Des retours positifs.
                </h4>
                <p className="text-sm smallsm:text-base md:text-lg xl:text-base">
                  Les retours de nos clients sont extrêmement importants car ils
                  nous permettent de vérifier si notre méthode pour réaliser vos
                  commandes fonctionne, nous écouterons toujours nos clients car
                  c’est grâce à eux que nous pouvons continuer à améliorer GMC
                  chaque jour. Et jusqu’à présent, nos clients sont toujours
                  satisfait de notre solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 lg:py-28">
        <div>
          <Divider />
          <div className="text-center lg:py-8">
            <div className="my-16 px-5 sm:relative">
            <h2 className="text-2xl underline decoration-green-300 decoration-4 underline-offset-4 sm:text-3xl sm:no-underline lg:text-4xl">Vous êtes convaincu ? Rejoignez-nous !</h2>
            <div className="hidden absolute w-[550px] h-5 bg-green-300 translate-x-[-50%] left-1/2 -bottom-1 sm:flex -z-10 lg:w-[670px] lg:bottom-[-6px] "></div>
            </div>
            <div className="flex flex-col px-5 gap-6 mb-6 smallsm:px-8 sm:items-center sm:gap-8 lg:mb-12">
            <Button className="bg-green-300 flex gap-3 sm:w-[550px]" as={Link} href="/shop">
              <Basket size={24} /> Découvrir la boutique
            </Button>
            <Button
            className="bg-violet-600 text-white flex gap-3 sm:w-[550px]"
              as={Link}
              href="https://discord.gg/rvzyZVqdDs"
              target="blank"
            >
              <DiscordLogo size={24} /> Rejoindre le Discord
            </Button>
            </div>
            <span className="text-red-400 text-sm">-10% sur toute la boutique pour votre première commande</span>
          </div>
        </div>
      </section>
    </>
  );
}
