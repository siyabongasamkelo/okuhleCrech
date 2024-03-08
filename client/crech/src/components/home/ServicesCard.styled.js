import styled from "styled-components";
import { ParagraphCover } from "./Home.styled";

export const ServicesCardCover = styled.div`
  height: 30vh;
  width: 90%;
  text-align: center;
  @media only screen and (min-width: 992px) {
    height: 30vh;
    width: 30%;
    text-align: left;
    margin-top: 5%;
  }
`;

export const CardImage = styled.div`
  height: 90%;
  width: 90%;
  margin-left: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 60%;
    width: 45%;
    object-fit: cover;
  }
  @media only screen and (min-width: 768px) {
    img {
      height: 50%;
      width: 25%;
      object-fit: cover;
    }
  }
  @media only screen and (min-width: 992px) {
    img {
      height: 50%;
      width: 35%;
    }
  }
`;

export const CardParaCover = styled(ParagraphCover)`
  /* margin-top: -5%; */
  text-align: center;
  margin-left: 15%;
  @media only screen and (min-width: 992px) {
    margin-left: 24%;
  }
`;
