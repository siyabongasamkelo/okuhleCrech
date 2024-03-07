import Footer from "../components/footer/Footer";
import AboutUs from "../components/home/AboutUs";
import Contact from "../components/home/Contact";
import Home from "../components/home/Home";
import OurServices from "../components/home/OurServices";

const HomePage = () => {
  return (
    <>
      <Home />
      <AboutUs />
      <OurServices />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
