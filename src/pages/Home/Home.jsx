import { useLoaderData } from "react-router-dom";
import Advise from "../../components/Advise";
import Hero from "../../components/Hero";
import Properties from "../../components/Properties";
import Appointment from "../../components/Appointment";
import { Helmet } from "react-helmet";

const Home = () => {
  const singleCardData = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Nestify Realty | Home</title>
      </Helmet>
      <Hero></Hero>
      <Advise></Advise>
      <Properties singleCardData={singleCardData}></Properties>
      <Appointment></Appointment>
    </div>
  );
};

export default Home;
