import { Button } from "@material-tailwind/react";
import errorImage from "../assets/error.svg";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="h-[100vh] bg-[#FFF9F6] flex flex-col justify-center items-center space-y-6">
      <img src={errorImage} alt="" />
      <p className="text-[28px] font-bold">Something wrong!</p>
      <Link to="/">
        <Button className="flex items-center gap-2 text-lg" variant="outlined">
          Homepage <FaChevronRight />
        </Button>
      </Link>
    </div>
  );
};

export default Error;
