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
      <div className="h-screen relative">
        {session ? (
          <div>
            <h1 className="text-center text-2xl my-20 px-5">
              Heureux de vous voir{" "}
              <span className="underline">{session?.user?.name}</span> !
            </h1>
            <div>
              <div className="flex flex-col items-center gap-12 px-5">
                <h2 className="">Vos informations :</h2>
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
                  className="w-full border-3 border-violet-400 bg-white text-violet-600 text-base py-5"
                >
                  Visiter la boutique
                </Button>
                <Button className="w-full border-3 border-blue-400 bg-white text-blue-400 text-base py-5">
                  Modifier vos informations
                </Button>
                <Button onPress={onOpen} className="w-full">
                  Se déconnecter
                </Button>
                <Modal className="h-3/4 flex flex-col items-center justify-center absolute top-1/2 -translate-y-1/2 w-3/4" isOpen={isOpen} onOpenChange={onOpenChange}>
                  <ModalContent>
                    {(onClose) => (
                      <>
                        <Button onClick={() => signOut({ callbackUrl: "/" })}>
                          Déconnexion
                        </Button>
                        <Button onPress={onClose}>Fermer</Button>
                      </>
                    )}
                  </ModalContent>
                </Modal>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
