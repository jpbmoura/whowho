import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({ afterSignInUrl: "/discovery" });

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
