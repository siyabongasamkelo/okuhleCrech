import styled from "styled-components";
import { H1, P } from "../home/Home.styled";

export const HeaderSliderStyled = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
  position: absolute;
  z-index: 1;
  top: 0%;
  border-radius: 10px 0 0 10px;
  overflow-x: hidden;
  font-family: "Anta", sans-serif;
  font-style: normal;
  @media only screen and (min-width: 992px) {
    display: none;
  }
`;

export const Heading = styled(H1)`
  color: black;
  text-align: center;
`;

export const Links = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  a {
    color: black;
    text-decoration: none;
    font-size: 18px;
    margin-top: 5%;
  }
`;

export const CopyRights = styled(P)`
  color: black;
  text-align: center;
  margin-top: 10%;
  letter-spacing: 1px;
  font-size: 14px;
`;

export const CloseButton = styled.div`
  height: 40px;
  margin-bottom: 20%;
  svg {
    fill: rgba(0, 0, 0, 0.8);
    transform: scale(3);
    margin: 30px;
    margin-left: 15%;
  }
`;
