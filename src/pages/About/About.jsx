import { Helmet } from "react-helmet";
import AboutHero from "../../components/AboutHero";
import AboutVision from "../../components/AboutVision";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Nestify Realty | About</title>
      </Helmet>
      <AboutHero></AboutHero>
      <AboutVision></AboutVision>
    </div>
  );
};

export default About;
