import { Button, Input } from "@material-tailwind/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const Hero = () => {
  return (
    <div className="bg-[#FFF7F0]">
      <div className="lg:max-w-[1200px] lg:mx-auto mx-5 py-14 lg:flex flex-row gap-14 items-center space-y-10">
        <div
          className="space-y-4"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <h1 className="lg:text-5xl text-3xl font-bold lg:leading-[140%]">
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
        <div
          className="lg:w-[50%]"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination, Autoplay]}
            loop={true}
            autoplay={{ delay: 2000 }}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className="lg:h-[520px] h-[400px] rounded-3xl"
                src="https://i.ibb.co/gDDWZM5/residensial-house-6.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="lg:h-[520px] h-[400px] rounded-3xl"
                src="https://i.ibb.co/Kj1rc1z/residensial-house-2.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="lg:h-[520px] h-[400px] rounded-3xl"
                src="https://i.ibb.co/Wc1nhmN/residensial-house-8.jpg"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
