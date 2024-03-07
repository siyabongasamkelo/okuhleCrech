import styled from "styled-components";

export const HomeCover = styled.section`
  width: 100%;
  font-family: "Anta", sans-serif;
  font-style: normal;
`;

export const HeroSection = styled.div`
  display: flex;
  flex-direction: column-reverse;
  @media only screen and (min-width: 992px) {
    flex-direction: row;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  margin-top: -8%;
  text-align: center;
  @media only screen and (min-width: 992px) {
    text-align: left;
    width: 55%;
    margin-top: 10%;
  }
`;

export const H1 = styled.h1`
  font-size: 28px;
  color: white;
  @media only screen and (min-width: 992px) {
    font-size: 64px;
  }
`;

export const H3 = styled.h3`
  color: white;
  font-size: 18px;

  @media only screen and (min-width: 992px) {
    font-size: 42px;
  }
`;

export const P = styled.p`
  line-height: 1.5;
  color: rgba(225, 225, 225, 0.7);
  font-size: 12px;
  @media only screen and (min-width: 992px) {
    padding-top: 5%;
    font-size: 16px;
  }
`;

export const ParagraphCover = styled.div`
  width: 80%;
  margin-left: 10%;
  @media only screen and (min-width: 992px) {
    width: 55%;
    margin-left: 0;
  }
`;

export const ImageContainer = styled.div`
  width: 90%;
  margin-left: 5%;
  margin-top: 15%;
  @media only screen and (min-width: 992px) {
    width: 40%;
    margin-top: 10%;
    margin-left: 10%;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    width: 60%;
    height: 20vh;
    object-fit: cover;
  }
  @media only screen and (min-width: 992px) {
    img {
      height: 30vh;
    }
  }
`;

export const FlexBox1 = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    width: 40%;
    height: 15vh;
    object-fit: cover;
  }
  @media only screen and (min-width: 992px) {
    img {
      height: 20vh;
    }
  }
`;

export const FlexBox3 = styled.div`
  display: flex;
  .div1 {
    width: 40%;
    height: 7vh;
  }
  .div2 {
    height: 7vh;
    width: 20%;
    background-color: #0c2d57;
  }
  @media only screen and (min-width: 992px) {
    .div1 {
      height: 10vh;
    }
    .div2 {
      height: 10vh;
    }
  }
`;

export const FlexBox4 = styled.div`
  display: flex;
  img {
    width: 40%;
    height: 10vh;
    object-fit: cover;
  }
  .div2 {
    width: 40%;
    height: 20vh;
  }
  @media only screen and (min-width: 992px) {
    img {
      height: 20vh;
    }
    .div2 {
      height: 20vh;
    }
  }
`;

export const ImageCover = styled.div``;

export const HeroCover = styled.div`
  display: flex;
`;

export const MyButton = styled.button`
  background-color: ${({ theme }) => theme.light.secondary};
  color: white;
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 15px 2px;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  &:hover {
    background-color: rgba(227, 101, 29, 0.5);
  }
`;
