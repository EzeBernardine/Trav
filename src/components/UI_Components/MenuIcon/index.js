/*
 * component: MenuIcon
 * author: Eze Bernardine May
 */

import React from "react";
import { Container, Wrapper, Icon } from "./styles";
import PropTypes from "prop-types";

const MenuIcon = ({ click, showMore, color }) => {
  console.log(showMore);
  return (
    <Container onClick={click}>
      <Wrapper>
        <Icon showMore={showMore} color={color} />
      </Wrapper>
    </Container>
  );
};
export default MenuIcon;

MenuIcon.propTypes = {
  click: PropTypes.func,
  showMore: PropTypes.bool,
};
