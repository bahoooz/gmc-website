"use client";

import { Input } from "@nextui-org/input";
import { Eye, EyeSlash, GithubLogo, GoogleLogo } from "@phosphor-icons/react";
import { useState } from "react";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";

import { signIn, useSession } from "next-auth/react";

export default function Connexion() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { data: session } = useSession();
  return (
    <>
      <form className="px-10 h-screen">
        <h1>Connexion</h1>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          variant="flat"
          color="secondary"
          type="email"
          label="Email"
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          color="secondary"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeSlash className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <Eye className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
        />
        <span>
          Pas de compte ? <Link href="/inscription">Inscris toi</Link>
        </span>
        <Button type="submit" color="secondary" variant="flat">
          Connexion
        </Button>
        <Button onClick={() => signIn("google")}>
          <GoogleLogo size={32} />
        </Button>
        <Button onClick={() => signIn("github")}>
          <GithubLogo size={32} />
        </Button>
      </form>
    </>
  );
}
