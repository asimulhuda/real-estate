const AboutHero = () => {
  const aboutHero = [
    {
      imageLink: "https://i.ibb.co/YDC0tX2/residensial-house-1.jpg",
    },
    {
      imageLink: "https://i.ibb.co/Kj1rc1z/residensial-house-2.jpg",
    },
    {
      imageLink: "https://i.ibb.co/6122nZb/residensial-house-3.jpg",
    },
    {
      imageLink: "https://i.ibb.co/mvbdpqP/residensial-house-4.jpg",
    },
    {
      imageLink: "https://i.ibb.co/gvpjQ8d/residensial-house-5.jpg",
    },
    {
      imageLink: "https://i.ibb.co/gDDWZM5/residensial-house-6.jpg",
    },
    {
      imageLink: "https://i.ibb.co/Fb2SYhp/residensial-house-7.jpg",
    },
    {
      imageLink: "https://i.ibb.co/Wc1nhmN/residensial-house-8.jpg",
    },
    {
      imageLink: "https://i.ibb.co/M7SPNMM/residensial-house-9.jpg",
    },
  ];

  return (
    <div className="lg:max-w-[1200px] lg:mx-auto mx-5 py-14">
      <div className=" text-center lg:w-[800px] mx-auto space-y-6">
        <h1 className="lg:text-5xl text-3xl font-bold ">
          Reimagining real estate to make it easier to unlock.
        </h1>
        <p className="">
          On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasure of
          the moment, so blinded by desire, that they cannot foresee the pain
          and trouble.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mt-10">
        {aboutHero.map(({ imageLink }, index) => (
          <div key={index}>
            <img
              className="h-40 w-full max-w-full rounded-lg object-cover object-center"
              src={imageLink}
              alt="gallery-photo"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutHero;
