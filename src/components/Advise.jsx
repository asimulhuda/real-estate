import { Button } from "@material-tailwind/react";
import { MdOutlineManageSearch } from "react-icons/md";
import { Link } from "react-router-dom";

const Advise = () => {
  return (
    <div className="lg:max-w-[1200px] lg:mx-auto mx-5 py-14 lg:flex flex-row gap-6 items-center space-y-6">
      <div className="space-y-8 px-12 py-20 bg-[#FFE0CE] rounded-[20px] lg:w-[600px]">
        <h3 className="text-4xl font-bold">
          Simple & easy way to find your dream Appointment
        </h3>
        <p className="text-lg font-normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <Button size="lg">
          <Link to="/properties">Get Started</Link>
        </Button>
      </div>
      <div className="lg:w-[600px] space-y-6">
        <div className="flex gap-6">
          <div className="px-6 py-7 w-full rounded-[20px] bg-[#FBEEE6] space-y-4">
            <MdOutlineManageSearch className="text-4xl text-[#FD6810]" />
            <h4 className="text-[28px] font-bold">
              Search <br />
              your location
            </h4>
          </div>
          <div className="px-6 py-7 w-full rounded-[20px] bg-[#FBEEE6] space-y-4">
            <MdOutlineManageSearch className="text-4xl text-[#FD6810]" />
            <h4 className="text-[28px] font-bold">
              Search <br />
              your location
            </h4>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="px-6 py-7 w-full rounded-[20px] bg-[#FBEEE6] space-y-4">
            <MdOutlineManageSearch className="text-4xl text-[#FD6810]" />
            <h4 className="text-[28px] font-bold">
              Search <br />
              your location
            </h4>
          </div>
          <div className="px-6 py-7 w-full rounded-[20px] bg-[#FBEEE6] space-y-4">
            <MdOutlineManageSearch className="text-4xl text-[#FD6810]" />
            <h4 className="text-[28px] font-bold">
              Search <br />
              your location
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advise;
