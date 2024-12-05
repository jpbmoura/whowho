"use client";

import { Button } from "@/components/ui/button";
import { SignedOut, SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-screen ">
        <SignedOut>
          <SignInButton forceRedirectUrl="/home/album">
            <Button>Sign In</Button>
          </SignInButton>
        </SignedOut>
      </div>
    </>
  );
}
