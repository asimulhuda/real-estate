import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import SingleCard from "./SingleCard";
import PropTypes from "prop-types";

const Properties = ({ singleCardData }) => {
  return (
    <div className="lg:max-w-[1200px] lg:mx-auto mx-5 py-14 space-y-10">
      <div className="flex justify-between">
        <h2 className="text-4xl font-semibold">Featured Properties</h2>
        <Link
          to="/Properties"
          className="flex gap-4 items-center text-[#FD650B] text-lg font-semibold"
        >
          Explore All <FaArrowRight />
        </Link>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {singleCardData.map((propertyData) => (
          <SingleCard
            key={propertyData.id}
            propertyData={propertyData}
          ></SingleCard>
        ))}
      </div>
    </div>
  );
};

Properties.propTypes = {
  singleCardData: PropTypes.array,
};

export default Properties;
