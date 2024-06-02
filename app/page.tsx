import Image from "next/image";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { currentUser } from "@clerk/nextjs/server";
import { SignOutButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button";
import { TypewriterEffectDemo } from "@/components/Hero";
export default async function Home() {
  const user = await currentUser();
  return (
    <>

      <TypewriterEffectDemo />
    
    </>
  );
}
