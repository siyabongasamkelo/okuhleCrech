import { AboutParaCover } from "./About.styled";
import { H3, P } from "./Home.styled";
import { OurServicesContainer, OurServicesCover } from "./OurServices.styled";
import ServicesCard from "./ServicesCard";
import dancer from "../../assets/img/dancer.png";
import drink from "../../assets/img/drink.png";
import ramen from "../../assets/img/ramen.png";

const OurServices = () => {
  return (
    <OurServicesCover>
      <H3>Our Services</H3>
      <AboutParaCover>
        <P>These are all the services we offer to our clients</P>
      </AboutParaCover>
      <OurServicesContainer>
        <ServicesCard
          img={dancer}
          para={"We stay and educate them during the day"}
        />
        <ServicesCard img={drink} para={"we feed them during the day"} />
        <ServicesCard
          img={ramen}
          para={"we bath them so they get home clean"}
        />
      </OurServicesContainer>
    </OurServicesCover>
  );
};

export default OurServices;
