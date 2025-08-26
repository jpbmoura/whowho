interface WhowhoContainerProps {
  children: React.ReactNode;
}

const WhowhoContainer = ({ children }: WhowhoContainerProps) => {
  return (
    <div className="flex m-auto flex-col items-center gap-4 max-w-4xl border-2 border-vintage-700 p-8 shadow-paper bg-vintage-50 relative">
      {/* Vintage corner decorations */}
      <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-vintage-800"></div>
      <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-vintage-800"></div>
      <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-vintage-800"></div>
      <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-vintage-800"></div>

      {/* Content */}
      <div className="w-full">{children}</div>

      {/* Vintage texture overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-gradient-to-br from-vintage-800 via-transparent to-vintage-800"></div>
    </div>
  );
};

export default WhowhoContainer;
