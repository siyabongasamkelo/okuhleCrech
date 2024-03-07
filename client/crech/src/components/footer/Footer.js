import { H3, P } from "../home/Home.styled";
import {
  ContactDetails,
  FooterCopyright,
  FooterCover,
  FooterData,
  Links,
  Subscribe,
  SubscribeButton,
  SubscribeCover,
} from "./Footer.styled";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterCover>
      <FooterData>
        <ContactDetails>
          <H3>Siphosakhe</H3>
          <P>O61 189 2231</P>
          <P>siyabongasamkelocia@gmail.com</P>
          <P>Kwazulu Natal, Mandeni, Kwasthebe</P>
        </ContactDetails>
        <Links>
          <H3>Links</H3>
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>About Us</Link>
          <Link to={"/"}>Our Services</Link>
          <Link to={"/"}>Contact Us</Link>
        </Links>
        <Subscribe>
          <H3>Let's stay in touch</H3>
          <SubscribeCover>
            <input
              type="email"
              name="email"
              placeholder="enter email...example@gmail.com"
            />

            <SubscribeButton>Subscribe</SubscribeButton>
          </SubscribeCover>
        </Subscribe>
      </FooterData>
      <FooterCopyright>
        <P>
          copyright&copy; {new Date().getFullYear()} All rights reserved
          Siphosake crech
        </P>
      </FooterCopyright>
    </FooterCover>
  );
};

export default Footer;
