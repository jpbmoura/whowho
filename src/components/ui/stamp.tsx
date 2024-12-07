interface StampProps {
  children: React.ReactNode;
}

const Stamp = ({ children }: StampProps) => {
  return (
    <div className="relative stamp-container">
      <div className="stamp bg-white border w-36 hover:bg-zinc-400 transition-colors">
        {children}
      </div>
    </div>
  );
};

export default Stamp;
