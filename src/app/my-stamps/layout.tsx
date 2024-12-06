import { Button } from "@/components/ui/button";
import { SignedIn, UserButton } from "@clerk/nextjs";

interface MyStampsLayoutProps {
  children: React.ReactNode;
}

const MyStampsLayout = ({ children }: MyStampsLayoutProps) => {
  return (
    <div className="h-screen w-full flex flex-col justify-between p-4 dark:bg-zinc-900 dark:text-white">
      <div className="space-y-10">
        <div className="flex flex-row justify-between">
          <h1 className="text-3xl font-koulen">WhoWho</h1>
          <SignedIn>
            <UserButton
              showName
              appearance={{ variables: { fontSize: "14px" } }}
            />
          </SignedIn>
        </div>
        <div className="flex md:flex-row flex-col gap-4">
          <div className="h-fit sticky md:top-4 top-12 z-20 bg-white shadow-blocked md:w-1/6 w-full border border-black p-2 flex flex-col justify-start items-start ">
            <Button variant="link" className="font-bold underline">
              Albums
            </Button>
            <Button variant="link">Movies</Button>
            <Button variant="link">Food</Button>
          </div>
          <div>{children}</div>
        </div>
      </div>

      <footer className="flex justify-center items-center h-16 mt-16 pb-4">
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

export default MyStampsLayout;
