import styled from "styled-components";
import { Flex } from "../Box/styles";

export const TableMain = styled.section`
  margin: -190px 5% 200px;
  > div {
    max-width: 1204.04px;
    margin: auto;
    @media (max-width: 950px) {
      flex-direction: column;
      > div {
        width: 100%;
      }
    }
  }

  /* ----------------media------------- */
  @media (max-width: 1200px) {
    * {
      font-size: 16px;
    }
  }
`;

export const TableLeft = styled.div`
  width: 50%;
  position: relative;
  box-shadow: 0px 0px 24px rgba(202, 202, 202, 0.25);
`;

export const TableRight = styled.div`
  box-shadow: 0px 0px 24px rgba(202, 202, 202, 0.25);
  width: 50%;
  margin-top: 21.89px;
  @media (max-width: 1200px) {
    margin-top: 1px;
  }
`;
// -----------------------Left side of the table-----------------------
export const TopRowLeft = styled(Flex)`
  padding: 40px 40px 40px 80px;
  background: ${({ theme }) => theme.palette.common.white};
  @media (max-width: 1200px) {
    padding: 20px;
  }
`;

export const MiddleRowLeft = styled(Flex)`
  padding: 40px 40px 40px 80px;
  position: relative;
  background: ${({ theme }) => theme.palette.primary.default};
  @media (max-width: 1200px) {
    padding: 20px;
  }
`;

export const BottomRowLeft = styled(Flex)`
  padding: 40px 40px 40px 80px;
  background: ${({ theme }) => theme.palette.common.white};
  @media (max-width: 1200px) {
    padding: 20px;
  }
`;

// -----------------------Badge-----------------------
export const Badge = styled(Flex)`
  background: ${({ theme }) => theme.palette.success.main};
  padding: 9px 8px 5px 18px;
  position: absolute;
  border-radius: 4px;
  top: 16px;
  left: -7px;
  > svg {
    margin-left: -10px;
  }
  svg:nth-child(2) {
    margin-right: 7px;
  }
`;
// -----------------------Right side of the table-----------------------
export const TopRowRight = styled(Flex)`
  padding: 40px;
  background: ${({ theme }) => theme.palette.common.white};
  padding: 40px 40px 24px;
  @media (max-width: 1200px) {
    padding: 20px 20px 24px;
  }
`;

export const MiddleRowRight = styled(Flex)`
  padding: 40px;
  background: ${({ theme }) => theme.palette.primary.default};
  @media (max-width: 1200px) {
    padding: 20px;
  }
`;

export const BottomRowRight = styled(Flex)`
  padding: 40px;
  background: ${({ theme }) => theme.palette.common.white};
  padding: 32px 40px 40px;
  @media (max-width: 1200px) {
    padding: 20px 20px 20px;
  }
`;

/*{Each row first child}*/ export const RowFirstChild = styled(Flex)`
  @media (max-width: 500px) {
    width: 40%;
    text-align: start;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;
/*{Each row f second child}*/ export const RowSecondChild = styled(Flex)`
  @media (max-width: 500px) {
    width: 40%;
    text-align: end;
    align-items: flex-end;
  }
`;
