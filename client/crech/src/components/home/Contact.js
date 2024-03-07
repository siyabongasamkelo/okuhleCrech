import React, { useState } from "react";
import {
  ContactContainer,
  ContactCover,
  ContactDetails,
  ContactForm,
  Flexbox,
  Input,
  SubmitButton,
  TextArea,
} from "./Contact.styled";
import { H3, P } from "./Home.styled";
import { AboutParaCover } from "./About.styled";
import { Envelope, GeoAlt, Telephone } from "react-bootstrap-icons";
import {
  Facebook,
  Whatsapp,
  Instagram,
  Twitter,
  Youtube,
} from "react-bootstrap-icons";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  return (
    <ContactCover>
      <H3>Contact Us</H3>
      <AboutParaCover>
        <P>We are here to help</P>
      </AboutParaCover>
      <ContactContainer>
        <ContactDetails>
          <Flexbox>
            <Envelope />
            <P>siyabongasamkelociam@gmail.com</P>
          </Flexbox>
          <Flexbox>
            <Telephone />
            <P>061 189 2231</P>
          </Flexbox>

          <Flexbox>
            <GeoAlt />
            <P>Kwazulu Natal, Mandeni, Kwasthebe</P>
          </Flexbox>

          <Flexbox>
            <Whatsapp />
            <Facebook />
            <Twitter />
            <Instagram />
            <Youtube />
          </Flexbox>
        </ContactDetails>
        <ContactForm>
          <Input
            placeholder="enter email...example@gmail.com"
            id="email"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextArea
            placeholder="Enter your Message"
            id="message"
            type="text"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <SubmitButton>Send Message</SubmitButton>
        </ContactForm>
      </ContactContainer>
    </ContactCover>
  );
};

export default Contact;
