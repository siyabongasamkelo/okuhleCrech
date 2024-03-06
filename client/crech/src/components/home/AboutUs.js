import { AboutContainer, AboutCover, AboutParaCover } from "./About.styled";
import { H3, P } from "./Home.styled";
import about from "../../assets/img/about.jpg";
import about2 from "../../assets/img/about2.jpg";
import about3 from "../../assets/img/about3.jpg";

const AboutUs = () => {
  return (
    <AboutCover>
      <H3>About Us</H3>
      <AboutParaCover>
        <P>
          We are loving people that are obsessed and passionate about raising a
          healthy and loving community that is why we created this day care
          that'll take care and noture young kids and raise them in a healthy
          and loving way...
        </P>
      </AboutParaCover>
      <AboutContainer>
        <img src={about} alt="kids" />
        <img src={about2} alt="kids" />
        <img src={about3} alt="kids" />
      </AboutContainer>
    </AboutCover>
  );
};

export default AboutUs;
