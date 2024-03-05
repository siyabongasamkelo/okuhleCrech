import {
  HeaderCover,
  Icons,
  Links,
  Logo,
  SocialMediaIcons,
} from "./Header.styled";
import { Link } from "react-router-dom";
import {
  Facebook,
  Whatsapp,
  Instagram,
  Twitter,
  Youtube,
} from "react-bootstrap-icons";

const Header = () => {
  return (
    <HeaderCover>
      <Logo>
        <h3>Logo</h3>
      </Logo>
      <Links>
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>Home</Link>
      </Links>
      <SocialMediaIcons>
        <Icons>
          <Facebook />
          <Whatsapp />
          <Instagram />
          <Twitter />
          <Youtube />
        </Icons>
      </SocialMediaIcons>
    </HeaderCover>
  );
};

export default Header;
