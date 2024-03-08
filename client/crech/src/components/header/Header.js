import {
  HeaderCover,
  Icons,
  Links,
  Logo,
  SocialMediaIcons,
} from "./Header.styled";
import { HashLink as Link } from "react-router-hash-link";
import {
  Facebook,
  Whatsapp,
  Instagram,
  Twitter,
  Youtube,
  List,
} from "react-bootstrap-icons";
import { useState } from "react";
import HeaderSlider from "./HeaderSlider";
const Header = () => {
  const [closeMenu, setCloseMenu] = useState(true);
  const [display, setDisplay] = useState("block");

  return (
    <HeaderCover>
      <Logo forMobile={false}>
        <h3>Siphosakhe</h3>
        <List
          className="mobileSvg"
          onClick={() => {
            closeMenu ? setDisplay("none") : setDisplay("block");
            setCloseMenu(false);
          }}
        />
      </Logo>
      <Links>
        <Logo forMobile={true}>
          <h3 className="mobileLogo">Logo</h3>
        </Logo>
        <Link smooth to={"/#home"}>
          Home
        </Link>
        <Link smooth to="/#aboutus">
          About Us
        </Link>
        <Link smooth to={"/#ourservices"}>
          Our Services
        </Link>
        <Link smooth to={"/#contactus"}>
          Contact Us
        </Link>
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
      <HeaderSlider
        setCloseMenu={() => {
          setCloseMenu(true);
        }}
        closeMenu={closeMenu}
        display={display}
      ></HeaderSlider>
    </HeaderCover>
  );
};

export default Header;
