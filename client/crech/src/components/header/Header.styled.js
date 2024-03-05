import styled from "styled-components";

export const HeaderCover = styled.header`
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Anta", sans-serif;
  font-style: normal;
  color: ${({ theme }) => theme.light.smallText};
`;

export const Logo = styled.div`
  h3 {
    font-size: 14px;
    color: ${({ theme }) => theme.light.smallText};
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    padding-left: 50px;
    text-decoration: none;
    color: ${({ theme }) => theme.light.smallText};
  }
`;

export const SocialMediaIcons = styled.div`
  height: 100px;
  width: 100px;
`;

export const Icons = styled.div`
  width: 40px;
  height: 200px;
  margin-top: 50%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0c2d57;
  svg {
    transform: scale(140%);
    margin-top: 20px;
  }
`;
