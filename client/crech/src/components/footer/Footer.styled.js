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
  flex-direction: column;
  @media only screen and (min-width: 992px) {
    flex-direction: row;
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
  width: 90%;
  p {
    padding-top: 0%;
  }
  @media only screen and (min-width: 992px) {
    width: 30%;
    flex-direction: row;
    p {
      line-height: 0px;
      padding-top: 3%;
    }
  }
`;

export const Links = styled.div`
  a {
    display: block;
    text-decoration: none;
    color: ${({ theme }) => theme.light.smallText};
    text-align: left;
  }
  width: 90%;
  @media only screen and (min-width: 992px) {
    width: 30%;
    display: flex;
    flex-direction: column;
  }
`;

export const Subscribe = styled.div`
  width: 90%;
  @media only screen and (min-width: 992px) {
    width: 30%;
    display: flex;
    flex-direction: column;
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
