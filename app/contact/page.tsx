import { LoginButton, LogoutButton } from "@/components/AuthButtons";
import { getSession } from "next-auth/react";

export default async function Contact() {
  const session = await getSession();
  return (
    <>
      <h1>
        {session?.user ? "Authenticated " + session?.user : "Not Authenticated"}
      </h1>
      <div>
        {session?.user ? (
          <LogoutButton />
        ) : <LoginButton />}
      </div>
    </>
  );
}
