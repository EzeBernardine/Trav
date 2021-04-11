import styled from "styled-components";

export const Styles = styled.menu`
  height: 103px;
  width: 100%;
  position: fixed;
  padding: 0;
  background: white;
  z-index: 100;
  right: 0;
  left: 0;
  top: 0;
  max-width: 1438px;
  margin: auto;
  background: ${({ theme }) => theme.palette.common.white};
`;

export const Title = styled.div`
  display: inline-flex;
  margin-right: 23px;
  h4 {
    margin-left: 16px;
  }
`;

export const Nav = styled.nav`
  ul {
    display: inline-flex;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const ListItems = styled.li`
  font-size: 16px;
  margin-right: 50px;
  white-space: nowrap;
  a {
    color: ${({ theme }) => theme.palette.grey.default};
  }
`;
export const Login = styled.div`
  a {
    color: ${({ theme }) => theme.palette.grey.main};
  }
  button {
    margin-left: 38.87px;
  }
  @media (max-width: 1220px) {
    display: none;
  }
`;

export const MenuIconWrap = styled.div`
  @media (min-width: 1220px) {
    display: none;
  }
  position: relative;
`;
// --------------------mobile views----------

export const MobileView = styled.div`
  position: absolute;
  right: 0;
  top: 31px;
  overflow: hidden;
  box-shadow: 0 0 4px 2px #8080801a;
`;
export const MobileViewContainer = styled.div`
  @keyframes rollDown {
    0% {
      top: -100%;
    }
    100% {
      top: 0%;
    }
  }
  position: relative;
  background: white;
  top: -100%;
  right: 0;
  border-radius: 4px;
  padding: 15px 0 5px;
  animation: rollDown 300ms linear forwards;
`;

export const MobileViewNav = styled(Nav)`
  display: none;
  ul {
    display: block;
    li {
      font-size: 14px;
      padding: 7px 15px;
      margin: 3px 0;
      :hover {
        background: ${({ theme }) => theme.palette.grey[100]};
      }
    }
  }
  @media (max-width: 1000px) {
    display: block;
  }
`;
export const MobileViewLogin = styled(Login)`
  display: none;
  span {
    padding: 7px 15px;
    margin: 3px 0;
    display: block;
    :hover {
      background: ${({ theme }) => theme.palette.grey[100]};
    }
    a {
      font-size: 14px;
      display: block;
    }
  }
  button {
    margin: 3px 5px 0;
    width: calc(100% - 10px);
    padding: 10px 20px;
  }
  @media (max-width: 1220px) {
    display: block;
  }
`;
