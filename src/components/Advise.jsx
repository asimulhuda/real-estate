import { Button } from "@material-tailwind/react";
import { FaRegEye, FaRegSmile } from "react-icons/fa";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineManageSearch } from "react-icons/md";
import { Link } from "react-router-dom";

const Advise = () => {
  return (
    <div className="lg:max-w-[1200px] lg:mx-auto mx-5 py-14 lg:flex flex-row gap-6 items-center space-y-6">
      <div
        className="space-y-8 lg:px-12 px-6 lg:py-20 py-10 bg-[#FFE0CE] rounded-[20px] lg:w-[600px]"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <h3 className="text-4xl font-bold">
          Simple & easy way to find your dream Appointment
        </h3>
        <p className="text-lg font-normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <Button size="lg">
          <Link to="/contact">Get Started</Link>
        </Button>
      </div>
      <div className="lg:w-[600px] space-y-6">
        <div className="flex lg:flex-row md:flex-row flex-col gap-6">
          <div
            className="px-6 py-7 w-full rounded-[20px] bg-[#FBEEE6] space-y-4"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <MdOutlineManageSearch className="text-4xl text-[#FD6810]" />
            <h4 className="text-[28px] font-bold">
              Search <br />
              your location
            </h4>
          </div>
          <div
            className="px-6 py-7 w-full rounded-[20px] bg-[#FBEEE6] space-y-4"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <FaRegEye className="text-4xl text-[#FD6810]" />
            <h4 className="text-[28px] font-bold">
              Visit <br />
              Appointment
            </h4>
          </div>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col gap-6">
          <div
            className="px-6 py-7 w-full rounded-[20px] bg-[#FBEEE6] space-y-4"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <FaRegSmile className="text-4xl text-[#FD6810]" />
            <h4 className="text-[28px] font-bold">
              Get your
              <br />
              dream house
            </h4>
          </div>
          <div
            className="px-6 py-7 w-full rounded-[20px] bg-[#FBEEE6] space-y-4"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <IoWalletOutline className="text-4xl text-[#FD6810]" />
            <h4 className="text-[28px] font-bold">
              Enjoy your
              <br />
              Appointment
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advise;
