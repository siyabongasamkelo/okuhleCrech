import {
  CloseButton,
  Links,
  HeaderSliderStyled,
  Heading,
  CopyRights,
} from "./HeaderSlider.styled";
import { X } from "react-bootstrap-icons";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";

const HeaderSlider = ({ closeMenu, setCloseMenu, display }) => {
  return (
    <HeaderSliderStyled
      as={motion.div}
      animate={{
        x: -35,
        width: closeMenu ? 0 : 450,
      }}
      transition={{ duration: 0.5 }}
      dis={display}
    >
      <CloseButton>
        <X onClick={setCloseMenu} />
      </CloseButton>
      <Heading>Siphokuhle</Heading>
      <Links>
        <Link smooth to={"/#home"} onClick={setCloseMenu}>
          Home
        </Link>
        <Link smooth to="/#aboutus" onClick={setCloseMenu}>
          About Us
        </Link>

        <Link smooth to={"/#ourservices"} onClick={setCloseMenu}>
          Our Services
        </Link>
        <Link smooth to={"/#contactus"} onClick={setCloseMenu}>
          Contact Us
        </Link>
      </Links>
      <CopyRights>
        copyright&copy; {new Date().getFullYear()} All rights reserved
        Siphokuhle
      </CopyRights>
    </HeaderSliderStyled>
  );
};

export default HeaderSlider;
