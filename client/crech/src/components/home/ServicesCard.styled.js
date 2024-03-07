import styled from "styled-components";
import { ParagraphCover } from "./Home.styled";

export const ServicesCardCover = styled.div`
  height: 30vh;
  width: 30%;
  margin-top: 5%;
  @media only screen and (max-width: 600px) {
    width: 90%;
    text-align: center;
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
`;

export const CardParaCover = styled(ParagraphCover)`
  margin-left: 24%;
  margin-top: -5%;
  text-align: center;
  @media only screen and (max-width: 600px) {
    margin-left: 15%;
  }
`;
