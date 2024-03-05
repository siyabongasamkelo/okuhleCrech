import styled from "styled-components";

export const HomeCover = styled.section`
  width: 100%;
`;

export const TextContainer = styled.div`
  width: 50%;
  margin-top: 50%;
`;

export const H1 = styled.h1`
  font-size: 64px;
  color: white;
`;

export const H3 = styled.h3`
  font-size: 42px;
  color: white;
`;

export const P = styled.p`
  line-height: 1.5;
  padding-top: 5%;
`;

export const ImageContainer = styled.div`
  width: 50%;
  margin-top: 80%;
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    width: 60%;
    height: 30vh;
    object-fit: cover;
  }
`;
export const FlexBox1 = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    width: 40%;
    height: 20vh;
    object-fit: cover;
  }
`;

export const FlexBox3 = styled.div`
  display: flex;
  .div1 {
    width: 40%;
    height: 10vh;
  }
  .div2 {
    width: 20%;
    height: 10vh;
    background-color: #0c2d57;
  }
`;

export const FlexBox4 = styled.div`
  display: flex;
  img {
    width: 40%;
    height: 20vh;
    object-fit: cover;
  }
  .div2 {
    width: 40%;
    height: 20vh;
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
`;
