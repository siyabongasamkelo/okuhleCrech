import styled from "styled-components";

export const ContactCover = styled.section`
  margin-top: 10%;
  text-align: center;
  font-family: "Anta", sans-serif;
  font-style: normal;
  @media only screen and (min-width: 992px) {
    text-align: left;
  }
`;

export const ContactContainer = styled.div`
  @media only screen and (min-width: 992px) {
    display: flex;
    flex-direction: row;
  }
`;

export const Flexbox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  svg {
    fill: white;
  }
`;

export const ContactDetails = styled.div`
  width: 90%;
  margin-left: 5%;
  @media only screen and (min-width: 992px) {
    width: 35%;
  }
`;

export const ContactForm = styled.form`
  width: 90%;
  margin-top: 10%;
  margin-left: 5%;

  @media only screen and (min-width: 992px) {
    width: 60%;
    margin-top: 0;
    display: flex;
    flex-direction: column;
  }
`;
export const Input = styled.input`
  border: 2px solid ${({ theme }) => theme.light.secondary};
  width: 100%;
  height: 40px;
  margin-left: 0;
  @media only screen and (min-width: 992px) {
    width: 60%;

    margin-left: 40%;
  }
`;

export const TextArea = styled.textarea`
  border: 2px solid ${({ theme }) => theme.light.secondary};
  margin-top: 3%;
  height: 150px;
  width: 100%;
  margin-left: 0;
  @media only screen and (min-width: 992px) {
    width: 60%;
    margin-top: 3%;
    margin-left: 40%;
  }
`;

export const SubmitButton = styled.button`
  height: 40px;
  width: 60%;
  background-color: ${({ theme }) => theme.light.secondary};
  color: white;
  border: none;
  font-size: 16px;
  margin-left: 40%;
  margin-top: 3%;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  &:hover {
    background-color: rgba(227, 101, 29, 0.5);
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-left: 0;
  }
`;
