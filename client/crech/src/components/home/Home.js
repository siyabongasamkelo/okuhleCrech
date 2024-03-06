import Header from "../header/Header";
import {
  FlexBox,
  FlexBox1,
  FlexBox3,
  FlexBox4,
  H1,
  H3,
  HeroSection,
  HomeCover,
  ImageContainer,
  ImageCover,
  MyButton,
  P,
  ParagraphCover,
  TextContainer,
} from "./Home.styled";
import hero from "../../assets/img/hero.jpg";
import hero2 from "../../assets/img/hero2.jpg";
import hero3 from "../../assets/img/hero3.jpg";

const Home = () => {
  return (
    <HomeCover>
      <Header />
      <HeroSection>
        <TextContainer>
          <H1>Okuhle Creshe</H1>
          <H3>Never Worry About The Saftey Of Your Kid</H3>
          <ParagraphCover>
            <P>
              We will take care of your kid all day until you come back from
              work so you can focus on your work and provide for your family
              wihout worrying about your kids...
            </P>
          </ParagraphCover>
          <MyButton>Learn More</MyButton>
        </TextContainer>
        <ImageContainer>
          <ImageCover>
            <FlexBox>
              <img src={hero} alt="kids" />
              <div></div>
            </FlexBox>
            <FlexBox1>
              <div></div>
              <img src={hero2} alt="kids" />
            </FlexBox1>
            <FlexBox3>
              <div className="div1"></div>
              <div className="div2"></div>
            </FlexBox3>
            <FlexBox4>
              <img src={hero3} alt="kids" />

              <div className="div2"></div>
            </FlexBox4>
          </ImageCover>
        </ImageContainer>
      </HeroSection>
    </HomeCover>
  );
};

export default Home;
