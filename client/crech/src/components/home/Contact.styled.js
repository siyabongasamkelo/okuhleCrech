import styled from "styled-components";

export const ContactCover = styled.section`
  margin-top: 10%;
`;

export const ContactContainer = styled.div`
  display: flex;
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
`;

export const ContactForm = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  width: 60%;
  height: 40px;
  margin-left: 40%;
  border: 2px solid ${({ theme }) => theme.light.secondary};
`;

export const TextArea = styled.textarea`
  width: 60%;
  height: 150px;
  margin-top: 3%;
  margin-left: 40%;
  border: 2px solid ${({ theme }) => theme.light.secondary};
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
`;
