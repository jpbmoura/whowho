import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

const PageHeader = () => {
  return (
    <header className="flex justify-between items-center py-6 bg-neutral-950 lg:px-60 px-10">
      <h1 className="text-2xl font-bold">WhoWho</h1>
      <div>
        <SignedOut>
          <SignInButton>
            <Button className="bg-purple-700">Sign In</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/discovery" />
        </SignedIn>
      </div>
    </header>
  );
};

export default PageHeader;
