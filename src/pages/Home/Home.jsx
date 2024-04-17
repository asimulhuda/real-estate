import { useLoaderData } from "react-router-dom";
import Advise from "../../components/Advise";
import Hero from "../../components/Hero";
import Properties from "../../components/Properties";
import Appointment from "../../components/Appointment";

const Home = () => {
  const singleCardData = useLoaderData();
  return (
    <div>
      <Hero></Hero>
      <Advise></Advise>
      <Properties singleCardData={singleCardData}></Properties>
      <Appointment></Appointment>
    </div>
  );
};

export default Home;
