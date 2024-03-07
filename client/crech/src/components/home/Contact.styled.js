import styled from "styled-components";

export const ContactCover = styled.section`
  margin-top: 10%;
  @media only screen and (max-width: 600px) {
    text-align: center;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
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
  width: 35%;
  @media only screen and (max-width: 600px) {
    width: 90%;
    margin-left: 5%;
  }
`;

export const ContactForm = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 600px) {
    width: 90%;
    margin-top: 10%;
    margin-left: 5%;
  }
`;
export const Input = styled.input`
  width: 60%;
  height: 40px;
  margin-left: 40%;
  border: 2px solid ${({ theme }) => theme.light.secondary};
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const TextArea = styled.textarea`
  width: 60%;
  height: 150px;
  margin-top: 3%;
  margin-left: 40%;
  border: 2px solid ${({ theme }) => theme.light.secondary};
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-left: 0;
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
