interface WhowhoContainerProps {
  children: React.ReactNode;
}

const WhowhoContainer = ({ children }: WhowhoContainerProps) => {
  return (
    <div className="flex m-auto flex-col items-center gap-4 max-w-2xl border border-black p-5 shadow-blocked bg-white">
      {children}
    </div>
  );
};

export default WhowhoContainer;
