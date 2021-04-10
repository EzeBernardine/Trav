import styled from "styled-components";
import { getSpacingFromTheme } from "../../../lib/factory.lib";

export const Flex = styled("div")`
  display: flex;
  justify-content: ${({ justify }) => justify || "center"};
  align-items: ${({ align }) => align || "center"};
  align-content: ${({ content }) => content || "center"};
  flex-wrap: ${({ flexWrap }) => flexWrap || "wrap"};
  flex-direction: ${({ direction }) => direction || "row"};
  flex: ${({ flex }) => flex && flex};
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "auto"};
  min-width: ${({ minWidth }) => minWidth && minWidth};
  min-height: ${({ minHeight }) => minHeight && minHeight};
  max-width: ${({ maxWidth }) => maxWidth && maxWidth};
  max-height: ${({ max, height }) => max && height};
  margin: ${({ auto, margin }) => (auto ? "auto" : margin ? margin : "unset")};
  padding: ${({ padding, theme }) =>
    padding ? getSpacingFromTheme({ spacing: padding, theme }) : "0"};
  & > * {
    min-width: ${({ minWidth }) => (minWidth ? minWidth : 0)};
  }
`;

export const Grid = styled("div")`
  display: grid;
  grid-template-columns: ${(props) => props.columns || "1fr"};
  grid-template-rows: ${(props) => props.rows || "auto"};
  grid-gap: ${(props) => props.gap || "10px"};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
  max-width: ${({ maxWidth }) => maxWidth && maxWidth};
  & > * {
    min-width: 0;
  }
`;

export const Frame = styled("div")`
  height: ${({ height }) => height || "30px"};
  min-height: ${({ height }) => height || "30px"};
  width: ${({ width }) => width || "30px"};
  min-width: ${({ width }) => width || "30px"};
  overflow: hidden;
  display: flex;
  & > * {
    height: 100%;
    width: 100%;
    object-fit: ${({ object }) => object || "cover"};
  }
`;
