import { FaArrowRight } from "react-icons/fa";
import SingleCard from "../../components/SingleCard";
import { Link, useLoaderData } from "react-router-dom";

const Property = () => {
  const singleCardData = useLoaderData();
  return (
    <div className="lg:max-w-[1200px] lg:mx-auto mx-5 py-14 space-y-10">
      <div className="">
        <h2 className="text-4xl font-semibold">All Properties</h2>
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

export default Property;
