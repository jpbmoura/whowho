interface StampProps {
  children: React.ReactNode;
}

const Stamp = ({ children }: StampProps) => {
  return <div className="stamp bg-white border h-48 w-36 ">{children}</div>;
};

export default Stamp;
