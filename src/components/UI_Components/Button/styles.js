import styled from "styled-components";

export const Styles = styled.button`
  background-color: ${({ bgColor, theme }) =>
    bgColor ? bgColor : theme.palette.primary.default};
  border-radius: 4px;
  color: ${({ theme, color }) => (color ? color : theme.palette.common.white)};
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  padding: 16px 23px;
  cursor: pointer;
  white-space: nowrap;
  :hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
`;
