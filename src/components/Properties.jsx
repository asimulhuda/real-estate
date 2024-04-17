import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Properties = () => {
  return (
    <div className="lg:max-w-[1200px] lg:mx-auto mx-5 py-14">
      <div className="flex justify-between">
        <h2 className="text-4xl font-semibold">Featured Properties</h2>
        <Link
          to="/Properties"
          className="flex gap-4 items-center text-[#FD650B] text-lg font-semibold"
        >
          Explore All <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Properties;
