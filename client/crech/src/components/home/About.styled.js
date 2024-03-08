import styled from "styled-components";
import { ParagraphCover } from "./Home.styled";

export const AboutCover = styled.section`
  font-family: "Anta", sans-serif;
  font-style: normal;
  margin-top: 5%;
  text-align: center;

  @media only screen and (min-width: 992px) {
    text-align: left;
  }
`;

export const AboutParaCover = styled(ParagraphCover)`
  width: 80%;
  @media only screen and (min-width: 992px) {
    width: 40%;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 90%;
    margin-left: 5%;
    margin-top: 10%;
    object-fit: cover;
  }
  @media only screen and (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    img {
      height: 30vh;
      width: 30%;
      margin-top: 5%;
    }
  }
`;
