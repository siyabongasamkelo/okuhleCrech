import styled from "styled-components";
import { ParagraphCover } from "./Home.styled";

export const AboutCover = styled.section`
  font-family: "Anta", sans-serif;
  font-style: normal;
  @media only screen and (max-width: 600px) {
    margin-top: 15%;
    text-align: center;
  }
`;

export const AboutParaCover = styled(ParagraphCover)`
  width: 40%;
  @media only screen and (max-width: 600px) {
    width: 80%;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    height: 30vh;
    width: 30%;
    margin-top: 5%;
    object-fit: cover;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    img {
      width: 90%;
      margin-left: 5%;
    }
  }
`;
