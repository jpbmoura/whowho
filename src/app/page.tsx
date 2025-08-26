"use client";

import { redirect } from "next/navigation";

export default function Root() {
  redirect("/home");

  return (
    <>
      <div className="flex justify-center items-center h-screen ">
        <div className="text-7xl font-koulen animate-pulse">W</div>
      </div>
    </>
  );
}
