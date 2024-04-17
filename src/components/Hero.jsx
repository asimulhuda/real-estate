import { Button, Input } from "@material-tailwind/react";
import heroImage from "../assets/heroImage.png";

const Hero = () => {
  return (
    <div className="bg-[#FFF7F0]">
      <div className="lg:max-w-[1200px] lg:mx-auto mx-5 py-14 lg:flex flex-row gap-14 items-center">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold leading-[140%]">
            Find a perfect property Where you will love to live
          </h1>
          <p className="text-xl font-normal">
            We helps businesses customize, automate and scale up their ad
            production and delivery
          </p>
          <div className="p-6 bg-[#fff] rounded-xl lg:w-[400px] w-full">
            <form className="self-stretch space-y-4">
              <Input size="lg" label="City/Street" />
              <Input size="lg" label="Property Type" />
              <Input size="lg" label="Price Range" />

              <Button size="lg" className="w-full">
                Search
              </Button>
            </form>
          </div>
        </div>
        <div className="w-[90%]">
          <img src={heroImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
