"use client";

import { Input } from "@nextui-org/input";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import { Link } from "@nextui-org/link";
import { useState } from "react";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

export default function Inscription() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [discordTag, setDiscordTag] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !discordTag || !email || !password) {
      setError("Tous les champs sont requis");
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
        }),
      });

      const {user} = await resUserExists.json()

      if (user) {
        setError("User already exists.")
        return
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          discordTag,
          email,
          password,
        }),
      });
      if (res.ok) {
        console.log("success");
        router.push("/connexion")
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration :", error);
    }
  };

  console.log("Name: ", name);

  return (
    <>
      <form onSubmit={handleSubmit} className="px-10">
        <h1>Inscription</h1>
        <Input
          onChange={(e) => setName(e.target.value)}
          variant="flat"
          color="secondary"
          type="text"
          label="Nom complet"
          required
        />
        <Input
          onChange={(e) => setDiscordTag(e.target.value)}
          variant="flat"
          color="secondary"
          type="text"
          label="Pseudonyme Discord"
        />
        <Input
          onChange={(e) => setEmail(e.target.value)}
          variant="flat"
          color="secondary"
          type="email"
          label="Email"
          required
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          color="secondary"
          required
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
          Déjà inscrit ? <Link href="/connexion">Connecte toi</Link>
        </span>{" "}
        <br />
        <Button type="submit" color="secondary" variant="flat">
          Inscription
        </Button>
        {error && (
          <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
            {error}
          </div>
        )}
      </form>
    </>
  );
}
