"use client";

import { redirect } from "next/navigation";

export default function Root() {
  redirect("/home");

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center">
          <div className="text-8xl font-koulen animate-pulse bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            W
          </div>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full animate-pulse"></div>
        </div>
      </div>
    </>
  );
}
