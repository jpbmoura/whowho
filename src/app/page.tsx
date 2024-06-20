"use client";

import { Button } from "@/components/ui/button";
import { SignInButton, SignedOut } from "@clerk/nextjs";
import { User, auth, currentUser, getAuth } from "@clerk/nextjs/server";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import SpotifyIcon from "@/assets/spotify/icons/01_RGB/02_PNG/Spotify_Icon_RGB_White.png";
import React from "react";
import Image from "next/image";

const Home = () => {
  const [user, setUser] = React.useState<User>();

  const handleVerifyLogin = async () => {
    const user = await fetch("/api/user").then((res) => res.json());
    setUser(user.user);
  };

  console.log(user);

  const handleLogin = () => {
    signIn("spotify", { callbackUrl: "http://localhost:3000/discovery" });
  };

  React.useEffect(() => {
    handleVerifyLogin();
  }, []);

  return (
    <main className="flex min-h-screen max-w-5xl m-auto flex-col px-10 py-16">
      <section className="flex flex-col items-center space-y-6">
        <span className="text-2xl font-thin">
          Welcome to WhoWho, a music discovery platform.
        </span>

        {!user ? (
          <div>
            <SignedOut>
              <SignInButton>
                <Button className="bg-purple-700">Start Here</Button>
              </SignInButton>
            </SignedOut>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-6">
            {user && (
              <span className="text-2xl font-thin">
                Welcome back,{" "}
                <span className="underline font-normal">{user.username}</span>.
                Click the button below to start discovering new music.
              </span>
            )}
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md flex flex-row items-center gap-2 hover:bg-green-600 transition-all duration-200 ease-in-out"
              onClick={handleLogin}
            >
              <Image src={SpotifyIcon} alt="spotify icon" className="size-6" />{" "}
              Start Spotify Session
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default Home;
