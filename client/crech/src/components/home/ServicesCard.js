import {
  CardImage,
  CardParaCover,
  ServicesCardCover,
} from "./ServicesCard.styled";
import { P } from "./Home.styled";

const ServicesCard = ({ img, para }) => {
  return (
    <ServicesCardCover>
      <CardImage>
        <img src={img} alt="illustrations" />
      </CardImage>
      <CardParaCover>
        <P>{para}</P>
      </CardParaCover>
    </ServicesCardCover>
  );
};

export default ServicesCard;
