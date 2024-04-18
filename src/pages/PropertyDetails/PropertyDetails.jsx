import { Button, Checkbox, Input, Textarea } from "@material-tailwind/react";
import { Helmet } from "react-helmet";
import { FaRegHandPointRight } from "react-icons/fa";
import { GrStatusUnknown } from "react-icons/gr";
import { IoMdResize } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineSegment } from "react-icons/md";
import { useLoaderData, useParams } from "react-router-dom";

const PropertyDetails = () => {
  const singleDetails = useLoaderData();
  const { id } = useParams();
  const singleDetail = singleDetails.find(
    (singleDetail) => singleDetail.id == id
  );

  const {
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    image,
  } = singleDetail;
  return (
    <div
      className="lg:max-w-[1200px] lg:mx-auto mx-5 py-14 space-y-10"
      data-aos="fade-in"
      data-aos-duration="2000"
    >
      <Helmet>
        <title>Nestify Realty | {estate_title}</title>
      </Helmet>
      <div className="flex justify-between">
        <div className="space-y-2">
          <h3 className="text-3xl">{estate_title}</h3>
          <h4 className="flex items-center gap-3">
            <GrStatusUnknown />
            {status}
          </h4>
          <h4 className="flex items-center gap-3">
            <IoLocationOutline />
            {location}
          </h4>
        </div>
        <h4 className="text-3xl">{price}</h4>
      </div>
      <div className=" flex lg:flex-row flex-col gap-10">
        <div className="lg:w-[850px] space-y-10">
          <img src={image} alt="" />
          <div className="px-10 py-11 rounded-lg bg-[#FFF9F6] text-[18px]">
            <div className="pb-8 border-b border-gray-600">
              <p>Details</p>
            </div>
            <div className="grid grid-cols-4 gap-2 pt-6">
              <h4 className="flex items-center gap-3">
                <MdOutlineSegment />
                {segment_name}
              </h4>
              <h4 className="flex items-center gap-3">
                <GrStatusUnknown />
                {location}
              </h4>
              <h4 className="flex items-center gap-3">
                <IoMdResize />
                {area}
              </h4>
              <div className="flex items-start gap-3">
                <FaRegHandPointRight />
                <ul className="">
                  {facilities.map((facility, idx) => (
                    <li key={idx}>{facility}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="px-10 py-11 rounded-lg bg-[#FFF9F6] text-lg">
            <div className="pb-8 border-b border-gray-600">
              <p>Description</p>
            </div>
            <div className="pt-6">
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="lg:w-[350px]">
          <div className="sticky top-32 px-7 py-10 bg-[#FFF9F6] rounded-lg space-y-4">
            <div className="flex gap-4 items-center">
              <div className="">
                <img
                  src="https://source.unsplash.com/100x100/?portrait?4"
                  alt=""
                  className="w-20"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <div>
                  <h2 className="text-2xl font-semibold">Leroy Jenkins</h2>
                  <span className="text-sm dark:text-gray-600">Agent</span>
                </div>
              </div>
            </div>
            <form className="space-y-2">
              <Input
                className="rounded-lg bg-white"
                type="text"
                label="Name"
                required
              />
              <Input
                className="rounded-lg bg-white"
                type="number"
                label="Phone"
                required
              />
              <Input
                className="rounded-lg bg-white"
                type="email"
                label="Email"
                required
              />
              <Textarea className="rounded-lg bg-white" label="Massage" />
              <select className="w-full px-2 py-3 rounded-lg border-[#B0BEC5] border">
                <option value="I'm a buy">I'm a buyer</option>
                <option value="I'm a age">I'm a agent</option>
                <option value="Other">Other</option>
              </select>
              <Checkbox
                label="By submitting this form I agree to Terms of Use"
                required
              />
              <Button className="w-full" type="submit">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
