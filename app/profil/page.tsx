"use client";

import { Button } from "@nextui-org/button";
import { Modal, ModalContent, useDisclosure } from "@nextui-org/modal";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function UserPage() {
  const { data: session } = useSession();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      {!session ? (
        <div className="h-[100svh] flex items-center justify-center">
          <h1 className="text-center mb-32 text-xl font-bold px-8">
            Pour accéder à votre profil veuillez vous connecter{" "}
            <Link className="text-blue-400 underline" href="/connexion">
              ici
            </Link>
          </h1>
        </div>
      ) : (
        <div className="h-screen relative">
          <div>
            <h1 className="text-center text-2xl my-20 px-5">
              Heureux de vous voir{" "}
              <span className="underline">{session?.user?.name}</span> !
            </h1>
            <div>
              <div className="flex flex-col items-center gap-12 px-5">
                <p className="text-center uppercase text-lg font-bold">
                  Code promotionnel -10% première commande :{" "}
                  <span className="text-red-600">GMCWELCOME24</span>
                </p>
                <h2>Vos informations :</h2>
                <div className="flex flex-col gap-2 text-center">
                  <p>
                    Nom :{" "}
                    <span className="text-violet-600 font-bold">
                      {session?.user?.name}
                    </span>
                  </p>
                  <p>
                    Adresse email :{" "}
                    <span className="text-violet-600 font-bold">
                      {session?.user?.email}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center px-8 my-12 gap-5">
                <Button
                  as={Link}
                  href="/shop"
                  className="w-full border-3 border-violet-400 bg-white text-violet-600 text-base py-5 sm:w-96"
                >
                  Visiter la boutique
                </Button>
                <Button className="w-full border-3 border-blue-400 bg-white text-blue-400 text-base py-5 sm:w-96">
                  Modifier vos informations
                </Button>
                <Button
                  onPress={onOpen}
                  className="w-full bg-red-600 text-white py-[22px] text-base sm:w-96"
                >
                  Se déconnecter
                </Button>
                <Modal
                  className="h-3/4 flex flex-col items-center justify-center absolute top-1/2 -translate-y-1/2 w-3/4 md:min-w-[500px] md:top-[43%]"
                  isOpen={isOpen}
                  onOpenChange={onOpenChange}
                >
                  <ModalContent>
                    {(onClose) => (
                      <>
                        <h2 className="text-center px-8 text-xl mb-24">
                          Voulez-vous vraiment vous déconnecter ?
                        </h2>
                        <div className="w-full flex flex-col items-center gap-3">
                          <Button
                            className="w-56 bg-red-600 text-white md:w-80"
                            onClick={() => signOut({ callbackUrl: "/" })}
                          >
                            Déconnexion
                          </Button>
                          <Button
                            className="w-56 text-white bg-violet-600 md:w-80"
                            onPress={onClose}
                          >
                            Annuler
                          </Button>
                        </div>
                      </>
                    )}
                  </ModalContent>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
