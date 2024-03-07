import styled from "styled-components";
import { SubmitButton } from "../home/Contact.styled";

export const FooterCover = styled.footer`
  height: 40vh;
  margin-top: 10%;
`;

export const FooterData = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Anta", sans-serif;
  font-style: normal;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const FooterCopyright = styled.div`
  height: 10vh;
  width: 90%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    padding: 0;
    margin: 0;
  }
`;

export const ContactDetails = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  p {
    line-height: 0px;
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const Links = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  a {
    display: block;
    text-decoration: none;
    color: ${({ theme }) => theme.light.smallText};
    text-align: left;
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const Subscribe = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const SubscribeCover = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: red;
  input {
    border: 2px solid ${({ theme }) => theme.light.secondary};
    height: 40px;
    margin-left: 0;
    width: 100%;
  }
`;

export const SubscribeButton = styled(SubmitButton)`
  width: 30%;
  margin: 0;
`;
