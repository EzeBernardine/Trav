import styled from "styled-components";

export const Styles = styled.header`
  margin-top: 103px;
  background-color: ${({ theme }) => theme.palette.primary.background};
  padding: 40px 5%;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1000px) {
    flex-direction: column;
    > * {
      width: 100%;
      margin: 0 auto 60px;
    }
  }
`;
export const Buttons = styled.div`
  button {
    width: 100%;
    width: 223px;
    margin-right: 24px;
    @media (max-width: 1233px) and (min-width: 1000px) {
      margin: 0 0 24px;
    }
    @media (max-width: 530px) {
      margin: 0 24px 24px 0;
    }
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
  @media (max-width: 1000px) {
    width: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: 300px;
    > :last-child {
      grid-template-columns: 1fr;
      grid-template-rows: 300px 300px;
    }
  }
`;
