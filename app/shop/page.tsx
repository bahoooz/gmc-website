"use client";

import CardOffer from "@/components/CardOffer";
import { Card, CardBody } from "@nextui-org/card";
import { Tab, Tabs } from "@nextui-org/tabs";
import { ArrowDown, ArrowsLeftRight } from "@phosphor-icons/react";
import Link from "next/link";

export default function Shop() {
  return (
    <>
      <header>
        <div className="relative h-screen bg-black bg-opacity-50">
          <h1 className="text-3xl smallsm:text-5xl font-bold text-center pt-16 sm:pt-40 text-white px-5">
            Boutique
          </h1>
          <p className="text-white text-center text-xl my-6">
            Tous nos services à des prix défiant toute concurrence.
          </p>
          <p className="text-center text-red-400">
            -20% sur votre première commande
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
            className="absolute left-1/2 -translate-x-1/2 top-14"
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
                        <li>la création d'un serveur garry's mod</li>
                        <li>la création de 8 jobs</li>
                        <li>la configuration de 5 addons / scripts</li>
                        <li>la configuration de contenu workshop</li>
                      </>
                    }
                    price="29,99"
                    displayBestOffer={false}
                  />
                  <CardOffer
                    title="Offre Serveur"
                    info_title="Medium"
                    liste={
                      <>
                        <li>la création d'un serveur garry's mod</li>
                        <li>la création de 20 jobs</li>
                        <li>la configuration de 15 addons / scripts</li>
                        <li>
                          l’optimisation et la création de contenu workshop
                        </li>
                        <li>1 mois d’hébergement sans frais supplémentaire</li>
                      </>
                    }
                    price="69,99"
                    outlineColor="xl:outline xl:outline-violet-600 xl:outline-8"
                    displayBestOffer={true}
                  />
                  <CardOffer
                    title="Offre Serveur"
                    info_title="Biggest"
                    liste={
                      <>
                        <li>la création d'un serveur garry's mod</li>
                        <li>la création de 25 jobs</li>
                        <li>la configuration de 25 addons / scripts</li>
                        <li>service d’optimisation complet</li>
                        <li>1 mois d’hébergement sans frais supplémentaire</li>
                        <li>mapping + optimisation de map</li>
                      </>
                    }
                    price="99,99"
                    displayBestOffer={false}
                  />
                </div>
              </div>
            </Tab>

            <Tab key="dev_web" title="Dev Web" className="text-white">
              <div className="">
                <Card className="w-28">Offre Serveur Start</Card>
              </div>
            </Tab>

            <Tab key="graphisme" title="Graphisme" className="text-white">
              <div className="border">
                <Card className="w-28">Offre Serveur Start</Card>
              </div>
            </Tab>
            <Tab key="mapping" title="Mapping">
              <div className="border">
                <Card className="w-28">Offre Serveur Start</Card>
              </div>
            </Tab>
            <Tab key="config_discord" title="Config Discord">
              <div className="border">
                <Card className="w-28">Offre Serveur Start</Card>
              </div>
            </Tab>
          </Tabs>
        </div>
      </section>
    </>
  );
}
