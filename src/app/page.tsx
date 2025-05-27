"use client";

import { Button } from "@/components/ui/button";
import { SignedOut, SignInButton, useSession } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Root() {
  const session = useSession();

  if (session.isSignedIn) {
    redirect("/home");
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen ">
        {!session.isLoaded && (
          <div className="text-7xl font-koulen animate-pulse">W</div>
        )}
        <SignedOut>
          <SignInButton forceRedirectUrl="/home/album">
            <Button>Sign In</Button>
          </SignInButton>
        </SignedOut>
      </div>
    </>
  );
}
