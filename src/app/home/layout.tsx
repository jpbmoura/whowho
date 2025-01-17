import { SignedIn, UserButton } from "@clerk/nextjs";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
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
        {children}
      </div>

      <footer className="flex justify-center items-center h-16 pb-4">
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
