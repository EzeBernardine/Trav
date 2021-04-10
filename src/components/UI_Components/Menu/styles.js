import styled from "styled-components";

export const Styles = styled.menu`
  height: 103px;
  padding: 0 5%;
  width: 100%;
  position: fixed;
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
export const SmallScreenNav = styled(Nav)`
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
export const SmallScreenLogin = styled(Login)`
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
    margin: 3px 0 0;
    width: 100%;
    padding: 10px 20px;
  }
  @media (max-width: 1220px) {
    display: block;
  }
`;
export const MobileView = styled.div`
  position: absolute;
  background: white;
  right: 0;
  border-radius: 4px;
  padding: 15px 0;
  box-shadow: 0 0 4px 2px #8080801a;
  top: 31px;
`;
