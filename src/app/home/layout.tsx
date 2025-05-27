import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  const currentPage = "home";
  const isMobile = true;

  return (
    <div className="h-screen w-full flex flex-col bg-panda-50">
      <header className="flex flex-row justify-between md:p-9 px-3 py-5">
        <div className="flex flex-row items-center md:space-x-12 space-x-6">
          <h1 className="text-2xl md:text-4xl font-koulen">WhoWho</h1>
          <nav className="flex flex-row space-x-4 text-sm md:text-base">
            <Link
              href="/home"
              className={`${currentPage == "home" && "font-bold text-fox-500"}`}
            >
              Home
            </Link>
            <Link href="/home/album">Albums</Link>
            <Link href="/home/movie">Movies</Link>
          </nav>
        </div>

        <SignedOut>
          <SignInButton forceRedirectUrl="/home/album">
            <Button
              size={isMobile ? "sm" : "default"}
              variant="primary"
              className="font-bold"
            >
              Sign In
            </Button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton
            showName
            appearance={{ variables: { fontSize: "16px" } }}
          />
        </SignedIn>
      </header>

      <main>{children}</main>

      <footer className="flex w-full justify-center items-center fixed bottom-0 p-4">
        <p className="text-center">
          Built with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          by{" "}
          <a
            href="https://jotape.me/about"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:font-bold hover:text-indigo-600"
          >
            JP
          </a>
        </p>
      </footer>
    </div>
  );
};

export default HomeLayout;
