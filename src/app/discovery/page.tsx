import { Album, AuthSession } from "@/types/types";
import { getNewReleases } from "@/utils/actions";
import { customGet, getAuthSession } from "@/utils/server-utils";
import { auth, currentUser, getAuth } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default async function Discovery() {
  return <main className=""></main>;
}
