import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import appointment1 from "../assets/appointment-1.png";
import appointment2 from "../assets/appointment-2.png";
import appointment3 from "../assets/appointment-3.png";
import appointment4 from "../assets/appointment-4.png";

const Appointment = () => {
  return (
    <div className="bg-[#FFF7F0]">
      <div className="lg:max-w-[1200px] lg:mx-auto mx-5 py-14 lg:flex flex-row gap-6 items-center space-y-6">
        <div
          className="space-y-8"
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
        <div className="container grid grid-cols-1 gap-4 p-4 mx-auto md:grid-cols-2">
          <img
            data-aos="fade-down"
            data-aos-duration="1500"
            alt=""
            className="w-full h-full rounded-xl shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={appointment1}
          />
          <img
            data-aos="fade-left"
            data-aos-duration="1500"
            alt=""
            className="w-full h-full rounded-xl shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={appointment2}
          />

          <img
            data-aos="fade-right"
            data-aos-duration="1500"
            alt=""
            className="w-full h-full rounded-xl shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={appointment3}
          />
          <img
            data-aos="fade-up"
            data-aos-duration="1500"
            alt=""
            className="w-full h-full rounded-xl shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={appointment4}
          />
        </div>
      </div>
    </div>
  );
};

export default Appointment;
