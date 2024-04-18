import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
