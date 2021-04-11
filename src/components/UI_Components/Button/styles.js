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
  box-shadow: -8px 0px 24px rgba(177, 176, 176, 0.25);
  :hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
`;
