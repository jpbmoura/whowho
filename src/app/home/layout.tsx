import Link from "next/link";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div className="h-screenw-full bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="glass border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row justify-between items-center py-6">
            <div className="flex flex-row items-center">
              <h1 className="text-3xl md:text-5xl font-koulen text-gray-900 tracking-wider">
                <Link
                  href="/home"
                  className="hover:text-blue-600 transition-colors duration-300"
                >
                  WhoWho
                </Link>
              </h1>
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60"></div>
      </header>

      <main className="h-full">{children}</main>
    </div>
  );
};

export default HomeLayout;
