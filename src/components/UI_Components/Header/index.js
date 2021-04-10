import { Styles, Buttons, Container, Grid } from "./styles";
import { Flex, Frame } from "../Box/styles";
import Img from "../../assest/Rectangle 59.png";
import Img1 from "../../assest/Rectangle 60.png";
import Img2 from "../../assest/Rectangle 61.png";
import Button from "../Button";
import { Header1, Paragraph } from "../Fonts/styles";

const Header = () => {
  return (
    <Styles className="App">
      <Container>
        <Flex width="calc(50% - 60px)" justify="flex-start" margin="0 60px 0 0">
          <Header1 colorTheme="grey/default" lineHeight="57.6px" size="48px">
            Your College Journey starts right here.
          </Header1>
          <Flex margin="40px 0 ">
            <Paragraph
              colorTheme="grey[200]"
              size="20px"
              lineHeight="28px"
              weight="normal"
            >
              Trav4College offers a robust platform that includes rich details
              on admissions, student profiles, cost of study, graduate outcomes
              and much more.
            </Paragraph>
          </Flex>

          <Buttons>
            <Button text="Sign Up" />
            <Button text="Download App" bgColor="#fff" color="#0480FC" />
          </Buttons>
        </Flex>

        <Grid
          width="50%"
          gap="24px"
          columns="1fr 1fr"
          rows="684px"
          maxWidth="700px"
        >
          <Frame height="100%" width="100%">
            <img src={Img} alt="action" />
          </Frame>

          <Grid gap="24px" rows="1fr 1fr" height="100%">
            <Frame width="100%" height="100%">
              <img src={Img1} alt="action" />
            </Frame>
            <Frame width="100%" height="100%">
              <img src={Img2} alt="action" />
            </Frame>
          </Grid>
        </Grid>
      </Container>
    </Styles>
  );
};

export default Header;
