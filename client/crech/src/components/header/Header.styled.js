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
    display: none;
    font-size: 14px;
    color: ${({ theme }) => theme.light.smallText};
  }
  svg {
    transform: scale(210%);
  }
  .mobileSvg,
  .mobileLogo {
    display: block;
  }

  @media only screen and (min-width: 992px) {
    h3 {
      display: block;
    }
    .mobileSvg,
    .mobileLogo {
      display: none;
    }
  }
`;

export const Links = styled.div`
  a {
    display: none;
  }

  @media only screen and (min-width: 992px) {
    display: flex;
    justify-content: space-between;
    a {
      display: block;
      padding-left: 50px;
      text-decoration: none;
      color: ${({ theme }) => theme.light.smallText};
    }
  }
`;

export const SocialMediaIcons = styled.div``;

export const Icons = styled.div`
  width: 40px;
  height: 200px;
  margin-top: 450%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0c2d57;
  svg {
    transform: scale(140%);
    margin-top: 20px;
  }
`;
