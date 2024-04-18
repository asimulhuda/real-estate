import visionImage from "../assets/visionImage.png";

const AboutVision = () => {
  return (
    <div className="bg-[#FFF9F5]">
      <div className="lg:max-w-[1200px] lg:mx-auto mx-5 py-14 flex lg:flex-row flex-col items-center gap-12">
        <div data-aos="fade-right" data-aos-duration="2000">
          <img src={visionImage} alt="" className="lg:w-[2000px] w-full" />
        </div>
        <div
          className="space-y-6"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <h1 className="lg:text-5xl text-3xl font-bold ">
            Our vision is simple.
          </h1>
          <p className="text-lg font-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. In a free hour, On the other hand, we denounce with
            righteous indignation and dislike men who are so beguiled and
            demoralized by the charms of pleasure of the moment. In a free hour,
            On the other hand, we denounce with righteous indignation and
            dislike men .
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutVision;
