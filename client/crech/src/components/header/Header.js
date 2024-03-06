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
  List,
} from "react-bootstrap-icons";

const Header = () => {
  return (
    <HeaderCover>
      <Logo forMobile={false}>
        <h3>Logo</h3>
        <List className="mobileSvg" />
      </Logo>
      <Links>
        <Logo forMobile={true}>
          <h3 className="mobileLogo">Logo</h3>
        </Logo>
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