import {
  Styles,
  Nav,
  ListItems,
  Title,
  Login,
  MenuIconWrap,
  SmallScreenNav,
  SmallScreenLogin,
  MobileView,
} from "./styles";
import { Flex, Frame } from "../Box/styles";
import Logo from "../../assest/logo_black.png";
import { useState } from "react";
import { Header4, Span } from "../../UI_Components/Fonts/styles";
import Button from "../Button";
import MenuIcon from "../MenuIcon";

const Header = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Styles>
      <Flex auto justify="space-between" height="100%">
        <Flex
          margin="0 0 0 0"
          justify="flex-start"
          height="100%"
          width="max-content"
        >
          <Title>
            <Frame object="contain" width="39px" height="19.75px">
              <img src={Logo} alt="company logo" />
            </Frame>
            <Header4 colorTheme="black" size="20px" lineHeight="22px" bold>
              Trav4College
            </Header4>
          </Title>
          <Nav>
            <ul>
              <ListItems>
                <a href="/"> College Application </a>
              </ListItems>
              <ListItems>
                <a href="/"> Scholarships </a>
              </ListItems>
              <ListItems>
                <a href="/"> Trav4College Packages </a>
              </ListItems>
            </ul>
          </Nav>
        </Flex>

        <Login>
          <Span>
            <a href="/">Login</a>
          </Span>
          <Button text="Get started" />
        </Login>

        <MenuIconWrap>
          <MenuIcon
            click={() => setShowMore(!showMore)}
            showMore={showMore}
            color="red"
          />
          {showMore ? (
            <MobileView>
              <SmallScreenNav>
                <ul>
                  <ListItems>
                    <a href="/"> College Application </a>
                  </ListItems>
                  <ListItems>
                    <a href="/"> Scholarships </a>
                  </ListItems>
                  <ListItems>
                    <a href="/"> Trav4College Packages </a>
                  </ListItems>
                </ul>
              </SmallScreenNav>
              <SmallScreenLogin>
                <Span>
                  <a href="/">Login</a>
                </Span>
                <Button text="Get started" />
              </SmallScreenLogin>
            </MobileView>
          ) : null}
        </MenuIconWrap>
      </Flex>
    </Styles>
  );
};

export default Header;
