import { FaHome } from "react-icons/fa";

const Logo = () => {
  return (
    <div className="text-3xl font-semibold flex items-start gap-2 ">
      <FaHome size={33} className="text-accent-500" />
      <span className="text-primary-500">SeHome</span>
    </div>
  );
};

export default Logo;
