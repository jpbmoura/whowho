"use client";

interface VintageLoadingProps {
  title?: string;
  subtitle?: string;
  loadingSteps?: string[];
  className?: string;
}

const VintageLoading = ({
  title = "📀 ALBUM DISCOVERY IN PROGRESS",
  subtitle = "Excavating today's musical treasure",
  loadingSteps = [
    "Dusting off vinyl collections",
    "Consulting the musical archives",
    "Preparing your auditory journey",
  ],
  className = "",
}: VintageLoadingProps) => {
  return (
    <div
      className={`flex justify-center items-center min-h-screen bg-vintage-100 relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-vintage-400 text-2xl animate-bounce"
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: "3s",
            }}
          >
            {["♪", "♫", "♩", "♬"][i % 4]}
          </div>
        ))}
      </div>

      <div className="text-center z-10">
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto relative">
            <div
              className="absolute inset-0 rounded-full bg-vintage-950 animate-spin"
              style={{ animationDuration: "3s" }}
            >
              <div className="absolute inset-2 rounded-full border-2 border-vintage-800"></div>
              <div className="absolute inset-4 rounded-full border-2 border-vintage-700"></div>
              <div className="absolute inset-6 rounded-full border-2 border-vintage-600"></div>

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-fox-600 rounded-full border-2 border-fox-800 flex items-center justify-center">
                <div className="w-2 h-2 bg-vintage-950 rounded-full"></div>
              </div>

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16">
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-vintage-100 text-xs font-bold">
                  WHO
                </div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-vintage-100 text-xs font-bold">
                  WHO
                </div>
              </div>
            </div>

            <div className="absolute -right-8 top-8 w-16 h-1 bg-vintage-800 rounded-full origin-left transform rotate-12">
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-fox-600 rounded-full border border-vintage-800"></div>
            </div>
          </div>
        </div>

        <div className="vintage-stamp max-w-md mx-auto p-6 mb-6">
          <h2 className="font-koulen text-2xl text-vintage-950 tracking-wider mb-3">
            {title}
          </h2>
          <div className="h-px bg-vintage-600 my-3"></div>
          <div className="vintage-text text-lg text-vintage-800 relative">
            <span className="inline-block">
              {subtitle}
              <span className="animate-pulse">...</span>
            </span>
          </div>
        </div>

        <div className="w-64 mx-auto">
          <div className="bg-vintage-200 border-2 border-vintage-600 rounded-full h-3 overflow-hidden shadow-vintage">
            <div
              className="h-full bg-gradient-to-r from-fox-500 to-fox-700 rounded-full animate-pulse"
              style={{ width: "60%" }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 vintage-text text-sm text-vintage-700">
            <span>🎵 Searching archives</span>
            <span>Curating your experience 🎶</span>
          </div>
        </div>

        <div className="mt-8 space-y-2">
          {loadingSteps.map((step, index) => (
            <div
              key={index}
              className="vintage-text text-vintage-700 text-sm opacity-50 animate-pulse"
              style={{ animationDelay: `${index * 0.7}s` }}
            >
              {step}...
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VintageLoading;
