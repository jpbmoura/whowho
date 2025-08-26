import Link from "next/link";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div className="min-h-screen w-full bg-vintage-100">
      <header className="border-b-2 border-vintage-700 bg-vintage-50 shadow-paper">
        <div className="flex flex-row justify-between md:p-9 px-3 py-5">
          <div className="flex flex-row items-center md:space-x-12 space-x-6">
            <h1 className="text-2xl md:text-4xl font-koulen text-vintage-950 tracking-wider">
              <Link href="/home">WhoWho</Link>
            </h1>
          </div>
        </div>

        <div className="h-0.5 bg-gradient-to-r from-fox-600 via-fox-500 to-fox-600"></div>
      </header>

      <main>{children}</main>
    </div>
  );
};

export default HomeLayout;
