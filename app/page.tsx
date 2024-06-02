import Image from "next/image";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { currentUser } from "@clerk/nextjs/server";
import { SignOutButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button";
export default async  function  Home() {
  const user = await currentUser();
  return (
    <>
      {user ?     <div>
      <SignOutButton>
        <Button>Sign out</Button>
      </SignOutButton>
    </div> : <>User has not signed in</>}
    </>
  );
}
