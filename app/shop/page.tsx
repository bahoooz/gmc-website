"use client";

import CardOffer from "@/components/CardOffer";
import { Card } from "@nextui-org/card";
import { Tab, Tabs } from "@nextui-org/tabs";
import { ArrowDown, ArrowsLeftRight } from "@phosphor-icons/react";
import Link from "next/link";
import DataConfigGlua from "./DataServices/config_glua.json";
import DataDevWeb from "./DataServices/dev_web.json";
import DataGraphisme from "./DataServices/graphisme.json";
import DataMapping from "./DataServices/mapping.json";
import DataConfigDiscord from "./DataServices/config_discord.json";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import { useSession } from "next-auth/react";

export default function Shop() {
  const { data: session } = useSession();
  return (
    <>
      <header>
        <div className="relative min-h-screen h-[600px] bg-black bg-opacity-50">
          <h1 className="text-3xl smallsm:text-5xl font-bold text-center pt-16 sm:pt-40 text-white px-5">
            Boutique
          </h1>
          <p className="text-white text-center text-xl my-6">
            Tous nos services à des prix défiant toute concurrence.
          </p>
          <p className="text-center text-red-400">
            -10% sur votre première commande
          </p>
          <div className="flex justify-center">
            <Link href="#shop">
              <ArrowDown
                size={64}
                color="white"
                weight="light"
                className="mt-28"
              />
            </Link>
          </div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="-z-10 absolute object-cover w-full h-full top-0 left-0"
          >
            <source src="/bg-video-gmc-shop.mp4" type="video/mp4" />
          </video>
        </div>
      </header>
      <section id="shop" className="bg-gray-800 py-12 lg:py-28">
        <div className="relative">
          <ArrowsLeftRight
            size={24}
            color="white"
            className="absolute left-1/2 -translate-x-1/2 top-14 md:hidden"
          />
          <Tabs
            aria-label="Options"
            className="flex justify-center overflow-x-scroll scrollbar-hide mb-20 lg:mb-24 max-w-[90%] mx-auto xl:mb-48"
            color="secondary"
            variant="bordered"
          >
            <Tab key="config_glua" title="Config gLua" className="text-white">
              <div>
                <div className="flex flex-wrap justify-center gap-10 px-10 md:gap-20">
                  <CardOffer
                    title="Offre Serveur"
                    info_title="Start"
                    liste={
                      <>
                        <li>✔️ mise en place de votre serveur Garry's Mod</li>
                        <li>✔️ création de 15 jobs</li>
                        <li>✔️ configuration de 10 addons / scripts</li>
                      </>
                    }
                    price="29,99"
                    displayBestOffer={false}
                    payment_link="https://buy.stripe.com/3cs6oYetp1FEc4U8wy"
                  />
                  <CardOffer
                    title="Offre Serveur"
                    info_title="Medium"
                    liste={
                      <>
                        <li>✔️ mise en place de votre serveur Garry's Mod</li>
                        <li>✔️ création de 30 jobs</li>
                        <li>✔️ configuration de 20 addons / scripts</li>
                        <li>✔️ création de content sur le workshop</li>
                        <li>✔️ optimisation de votre workshop</li>
                      </>
                    }
                    price="69,99"
                    outlineColor="xl:outline xl:outline-violet-600 xl:outline-8"
                    displayBestOffer={true}
                    payment_link="https://buy.stripe.com/00g3cM3OL842fh67sv"
                  />
                  <CardOffer
                    title="Offre Serveur"
                    info_title="Biggest"
                    liste={
                      <>
                        <li>✔️ mise en place de votre serveur Garry's Mod</li>
                        <li>✔️ création de 40 jobs</li>
                        <li>✔️ configuration de 30 addons / scripts</li>
                        <li>✔️ création de content sur le workshop </li>
                        <li>✔️ optimisation de votre workshop</li>
                        <li>✔️ optimisation réseau de votre serveur</li>
                        <li>✔️ optimisation du rendu de divers entités</li>
                        <li>✔️ optimisation du client à la connexion</li>
                      </>
                    }
                    price="99,99"
                    displayBestOffer={false}
                    payment_link="https://buy.stripe.com/6oEeVubhd5VU1qg6os"
                  />
                </div>
                <h3 className="text-center my-16 md:my-32 text-xl text-violet-400 font-bold lg:text-start lg:ml-28 xl:my-48 2xl:ml-56">
                  Autres services
                </h3>
                <div className="flex flex-wrap justify-center gap-24 px-12 md:px-16 lg:gap-32">
                  {DataConfigGlua.map((service: any, index: any) => (
                    <Card
                      key={index}
                      className="w-64 text-center shadow-xl shadow-black flex flex-col justify-between"
                    >
                      <div className="flex flex-col">
                        <Image
                          src="/gmod_img_card.png"
                          alt={service.title}
                          width="100%"
                          height={225}
                          className="w-full h-[200px] object-cover"
                        />
                        <span className="my-5 text-red-400 px-5">
                          {service.title}
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Divider className="mb-5 w-4/5" />
                        <p className="px-5 mb-5 text-sm">
                          {service.description}
                        </p>
                      </div>
                      <div className="px-5 flex flex-col gap-5">
                        <span className="text-violet-400 text-sm uppercase">
                          {service.payment_type}
                        </span>
                        <Button
                          as={Link}
                          href={!session ? "/connexion" : service.payment_link}
                          className="mb-5 w-full bg-red-400 text-white flex justify-between"
                        >
                          Acheter <span>{service.price}€</span>
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </Tab>

            <Tab key="dev_web" title="Dev Web" className="text-white">
              <div>
                <div className="flex flex-wrap justify-center gap-10 px-10 md:gap-20">
                  <CardOffer
                    title="Offre Website"
                    info_title="Start"
                    liste={
                      <>
                        <li>
                          ✔️ création d'un site internet avec les dernières
                          technologies
                        </li>
                        <li>
                          ✔️ une page sous forme de landing page pour présenter
                          ce que vous désirez
                        </li>
                        <li>
                          ✔️ une maquette graphique pour le design du site
                          comprise dans l'offre
                        </li>
                        <li>
                          ✔️ des animations et une optimisation du site web
                        </li>
                      </>
                    }
                    price="49,99"
                    displayBestOffer={false}
                    payment_link="https://buy.stripe.com/6oE28IgBx1FEc4U6oF"
                  />
                  <CardOffer
                    title="Offre Website"
                    info_title="Medium"
                    liste={
                      <>
                        <li>
                          ✔️ création d'un site internet avec les dernières
                          technologies
                        </li>
                        <li>
                          ✔️ jusqu'à 5 pages selon les besoins de votre site web
                        </li>
                        <li>
                          ✔️ une maquette graphique pour le design du site
                          comprise dans l'offre
                        </li>
                        <li>
                          ✔️ des animations et une optimisation du site web
                        </li>
                        <li>
                          ✔️ possibilités de rajouter un système de connexion,
                          de boutique etc...
                        </li>
                        <li>
                          ✔️ une maintenance du site pour seulement 9,99€ par
                          mois
                        </li>
                      </>
                    }
                    price="74,99"
                    outlineColor="xl:outline xl:outline-violet-600 xl:outline-8"
                    displayBestOffer={true}
                    payment_link="https://buy.stripe.com/28o7t2ad98426KA4gy"
                  />
                  <CardOffer
                    title="Offre Website"
                    info_title="Biggest"
                    liste={
                      <>
                        <li>
                          ✔️ création d'un site internet avec les dernières
                          technologies
                        </li>
                        <li>
                          ✔️ jusqu'à 10 pages selon les besoins de votre site
                          web
                        </li>
                        <li>
                          ✔️ une maquette graphique pour le design du site
                          comprise dans l'offre
                        </li>
                        <li>
                          ✔️ des animations et une optimisation du site web
                        </li>
                        <li>
                          ✔️ possibilités de rajouter un système de connexion,
                          de boutique etc...
                        </li>
                        <li>
                          ✔️ une maintenance du site pour seulement 9,99€ par
                          mois
                        </li>
                        <li>✔️ le nom de domaine offert</li>
                      </>
                    }
                    price="149,99"
                    displayBestOffer={false}
                    payment_link="https://buy.stripe.com/14kfZy1GD1FEgla9AT"
                  />
                </div>
                <h3 className="text-center my-16 md:my-32 text-xl text-violet-400 font-bold lg:text-start lg:ml-28 xl:my-48 2xl:ml-56">
                  Autres services
                </h3>
                <div className="flex flex-wrap justify-center gap-24 px-12 md:px-16 lg:gap-32">
                  {DataDevWeb.map((service: any, index: any) => (
                    <Card
                      key={index}
                      className="w-64 text-center shadow-xl shadow-black flex flex-col justify-between"
                    >
                      <div className="flex flex-col">
                        <Image
                          src="/dev_web_img_card.png"
                          alt={service.title}
                          width="100%"
                          height={225}
                          className="w-full h-[200px] object-cover"
                        />
                        <span className="my-5 text-red-400 px-5">
                          {service.title}
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Divider className="mb-5 w-4/5" />
                        <p className="px-5 mb-5 text-sm">
                          {service.description}
                        </p>
                      </div>
                      <div className="px-5 flex flex-col gap-5">
                        <span className="text-violet-400 text-sm uppercase">
                          {service.payment_type}
                        </span>
                        <Button
                          as={Link}
                          href={!session ? "/connexion" : service.payment_link}
                          className="mb-5 w-full bg-red-400 text-white flex justify-between"
                        >
                          Acheter <span>{service.price}€</span>
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </Tab>

            <Tab key="graphisme" title="Graphisme" className="text-white">
              <div>
                <div className="flex flex-wrap justify-center gap-10 px-10 md:gap-20">
                  <CardOffer
                    title="Offre Pack Graphisme"
                    info_title="Start"
                    liste={
                      <>
                        <li>
                          ✔️ création d'un logo avec des simples déclinaisons
                        </li>
                        <li>✔️ création d'une bannière</li>
                        <li>
                          ✔️ création de 3 affiches en fonction de votre logo
                        </li>
                        <li>✔️ fichier source</li>
                      </>
                    }
                    price="34,99"
                    displayBestOffer={false}
                    payment_link="https://buy.stripe.com/fZe5kU2KHckid8Y9B0"
                  />
                  <CardOffer
                    title="Offre Identité Graphique"
                    info_title="Medium"
                    liste={
                      <>
                        <li>✔️ création d'une charte graphique complète</li>
                        <li>✔️ création d'un logo</li>
                        <li>✔️ création d'une bannière</li>
                        <li>✔️ création de plusieurs icônes</li>
                        <li>✔️ création de plusieures affiches</li>
                        <li>✔️ fichier source</li>
                      </>
                    }
                    price="59,99"
                    outlineColor="xl:outline xl:outline-violet-600 xl:outline-8"
                    displayBestOffer={true}
                    payment_link="https://buy.stripe.com/28odRqfxt2JI5GwcNd"
                  />
                  <CardOffer
                    title="Offre Identitée Graphique Complète"
                    info_title="Biggest"
                    liste={
                      <>
                        <li>✔️ création d'une charte graphique complète</li>
                        <li>✔️ création d'un logo</li>
                        <li>✔️ création d'une bannière</li>
                        <li>✔️ création de plusieurs icônes</li>
                        <li>✔️ création de plusieures affiches</li>
                        <li>✔️ maquette graphique pour un site web</li>
                        <li>✔️ fichier source</li>
                      </>
                    }
                    price="99,99"
                    displayBestOffer={false}
                    payment_link="https://buy.stripe.com/3cs9Ba0Cz0BA9WMfZq"
                  />
                </div>
                <h3 className="text-center my-16 md:my-32 text-xl text-violet-400 font-bold lg:text-start lg:ml-28 xl:my-48 2xl:ml-56">
                  Autres services
                </h3>
                <div className="flex flex-wrap justify-center gap-24 px-12 md:px-16 lg:gap-32">
                  {DataGraphisme.map((service: any, index: any) => (
                    <Card
                      key={index}
                      className="w-64 text-center shadow-xl shadow-black flex flex-col justify-between"
                    >
                      <div className="flex flex-col">
                        <Image
                          src="/graphisme_img_card.png"
                          alt={service.title}
                          width="100%"
                          height={225}
                          className="w-full h-[200px] object-cover"
                        />
                        <span className="my-5 text-red-400 px-5">
                          {service.title}
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Divider className="mb-5 w-4/5" />
                        <p className="px-5 mb-5 text-sm">
                          {service.description}
                        </p>
                      </div>
                      <div className="px-5 flex flex-col gap-5">
                        <span className="text-violet-400 text-sm uppercase">
                          {service.payment_type}
                        </span>
                        <Button
                          as={Link}
                          href={!session ? "/connexion" : service.payment_link}
                          className="mb-5 w-full bg-red-400 text-white flex justify-between"
                        >
                          Acheter <span>{service.price}€</span>
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </Tab>
            <Tab key="config_discord" title="Config Discord">
              <div>
                <div className="flex flex-wrap justify-center gap-10 px-10 md:gap-20">
                  <CardOffer
                    title="Offre Discord"
                    info_title="Start"
                    liste={
                      <>
                        <li>✔️ création d'un serveur discord</li>
                        <li>✔️ création de jusqu'à 15 rôles</li>
                        <li>✔️ création de jusqu'à 20 salons</li>
                        <li>✔️ configuration de jusqu'à 2 bots</li>
                      </>
                    }
                    price="9,99"
                    displayBestOffer={false}
                    payment_link="https://buy.stripe.com/dR66oY1GDdomb0QfZx"
                  />
                  <CardOffer
                    title="Offre Discord"
                    info_title="Medium"
                    liste={
                      <>
                        <li>✔️ création d'un serveur discord</li>
                        <li>✔️ création de jusqu'à 20 rôles</li>
                        <li>✔️ création de jusqu'à 30 salons</li>
                        <li>✔️ configuration de jusqu'à 5 bots</li>
                        <li>✔️ création d'un bot personnalisé</li>
                      </>
                    }
                    price="19,99"
                    outlineColor="xl:outline xl:outline-violet-600 xl:outline-8"
                    displayBestOffer={true}
                    payment_link="https://buy.stripe.com/fZe28I70Xesq4CscNm"
                  />
                  <CardOffer
                    title="Offre Discord"
                    info_title="Biggest"
                    liste={
                      <>
                        <li>✔️ création d'un serveur discord</li>
                        <li>✔️ création de jusqu'à 30 rôles</li>
                        <li>✔️ création de jusqu'à 50 salons</li>
                        <li>✔️ configuration de jusqu'à 8 bots</li>
                        <li>✔️ création d'un bot personnalisé</li>
                      </>
                    }
                    price="29,99"
                    displayBestOffer={false}
                    payment_link="https://buy.stripe.com/dR6bJi2KH986d8Y3cN"
                  />
                </div>
                <h3 className="text-center my-16 md:my-32 text-xl text-violet-400 font-bold lg:text-start lg:ml-28 xl:my-48 2xl:ml-56">
                  Autres services
                </h3>
                <div className="flex flex-wrap justify-center gap-24 px-12 md:px-16 lg:gap-32">
                  {DataConfigDiscord.map((service: any, index: any) => (
                    <Card
                      key={index}
                      className="w-64 text-center shadow-xl shadow-black flex flex-col justify-between"
                    >
                      <div className="flex flex-col">
                        <Image
                          src="/discord_img_card.png"
                          alt={service.title}
                          width="100%"
                          height={225}
                          className="w-full h-[200px] object-cover"
                        />
                        <span className="my-5 text-red-400 px-5">
                          {service.title}
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Divider className="mb-5 w-4/5" />
                        <p className="px-5 mb-5 text-sm">
                          {service.description}
                        </p>
                      </div>
                      <div className="px-5 flex flex-col gap-5">
                        <span className="text-violet-400 text-sm uppercase">
                          {service.payment_type}
                        </span>
                        <Button
                          as={Link}
                          href={!session ? "/connexion" : service.payment_link}
                          className="mb-5 w-full bg-red-400 text-white flex justify-between"
                        >
                          Acheter <span>{service.price}€</span>
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </section>
    </>
  );
}
