import { Styles } from "./styles";
import { Flex, Frame } from "../Box/styles";
import Logo from "../../assest/logo_black.png";
import Button from "../Button";
import { Header1, Paragraph } from "../Fonts/styles";
import { useState } from "react";

const Header = () => {
  return (
    <Styles className="App">
      <Flex
        margin="0 0 0 0"
        justify="space-between"
        height="100%"
        className="container"
      >
        <Flex width="50%">
          <Header1 colorTheme="grey/default" lineHeight="57.6px" size="48px">
            Your College Journey starts right here.{" "}
          </Header1>
          <Paragraph
            colorTheme="grey[200]"
            size="20px"
            lineHeight="28px"
            weight="normal"
          >
            Trav4College offers a robust platform that includes rich details on
            admissions, student profiles, cost of study, graduate outcomes and
            much more.
          </Paragraph>

          <Flex>
            <Button text="Sign Up" />
            <Button text="Download App" bgColor="#fff" />
          </Flex>
        </Flex>

        <Flex width="50%"></Flex>
      </Flex>
    </Styles>
  );
};

export default Header;
