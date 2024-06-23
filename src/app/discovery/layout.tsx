import AlbumCard from "@/components/album-card";
import { NextAuthProvider } from "@/providers/next-auth-provider";
import { getNewReleases } from "@/utils/actions";
import { getAuthSession } from "@/utils/server-utils";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

export default async function DiscoveryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await currentUser();

  const session = await getAuthSession();

  if (!session || !user) {
    console.error("No session found");
    return redirect("/");
  }

  const newReleases = await getNewReleases(session);

  return (
    <>
      <NextAuthProvider>
        <main className="flex min-h-screen max-w-5xl m-auto flex-col px-10 py-16 md:py-0 space-y-14">
          <section className="flex flex-col items-center space-y-6">
            <span className="text-2xl font-thin">
              Welcome back,{" "}
              <span className="underline font-normal">{user?.username}</span>.
              Here`s some news in the music world.
            </span>

            <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
              {newReleases.map((album) => (
                <div key={album.id} className="flex flex-col">
                  <AlbumCard album={album} size="medium" session={session} />
                </div>
              ))}
            </div>
          </section>

          <section className="flex flex-col space-y-6">
            <span className="text-2xl font-thin">Weekly Top 5</span>

            <div className="grid lg:grid-cols-5 grid-cols-3 gap-4"></div>
          </section>
          {children}
        </main>
      </NextAuthProvider>
    </>
  );
}
