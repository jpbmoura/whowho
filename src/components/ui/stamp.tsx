import { FaFaceGrinStars, FaFaceTired } from "react-icons/fa6";

interface StampProps {
  children: React.ReactNode;
  hasLiked?: boolean;
}

const Stamp = ({ children, hasLiked }: StampProps) => {
  return (
    <div className="relative stamp-container">
      <div className="stamp bg-white border h-48 w-36">{children}</div>
      <div className={` stamp-overlay`}>
        {hasLiked && <FaFaceGrinStars className="text-green-500" />}
        {!hasLiked && <FaFaceTired className="text-red-500" />}
      </div>
    </div>
  );
};

export default Stamp;
