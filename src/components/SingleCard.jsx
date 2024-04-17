import { Button } from "@material-tailwind/react";
import { GrStatusUnknown } from "react-icons/gr";
import { IoMdResize } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineSegment } from "react-icons/md";
import PropTypes from "prop-types";

const SingleCard = ({ propertyData }) => {
  const { segment_name, estate_title, price, image, area, status, location } =
    propertyData;
  return (
    <div className="bg-[#FFF9F6] rounded-xl border border-[#ECD6C8]">
      <img
        src={image}
        alt=""
        className="object-cover object-center w-full rounded-t-xl h-72 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-4">
        <h3 className="font-semibold">{estate_title}</h3>
        <div className="flex justify-between">
          <div className="space-y-2">
            <h4 className="flex items-center gap-3">
              <MdOutlineSegment />
              {segment_name}
            </h4>
            <h4 className="flex items-center gap-3">
              <IoMdResize />
              {area}
            </h4>
          </div>
          <div className="space-y-2">
            <h4 className="flex items-center gap-3">
              <GrStatusUnknown />
              {status}
            </h4>
            <h4 className="flex items-center gap-3">
              <IoLocationOutline />
              {location}
            </h4>
          </div>
        </div>
        <div className="flex justify-between">
          <Button size="lg">View Details</Button>
          <h5 className="text-2xl font-semibold">{price}</h5>
        </div>
      </div>
    </div>
  );
};

SingleCard.propTypes = {
  propertyData: PropTypes.object,
};

export default SingleCard;
