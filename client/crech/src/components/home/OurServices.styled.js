import styled from "styled-components";
import { AboutContainer } from "./About.styled";

export const OurServicesCover = styled.section`
  font-family: "Anta", sans-serif;
  font-style: normal;
  text-align: center;
  margin-top: 15%;
  @media only screen and (min-width: 992px) {
    margin-top: 7%;
  }
`;

export const OurServicesContainer = styled(AboutContainer)`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 992px) {
    flex-direction: row;
  }
`;
