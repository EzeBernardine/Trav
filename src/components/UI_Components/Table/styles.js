import styled from "styled-components";

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
  .topRow {
    background: ${({ theme }) => theme.palette.common.white};
    &.second {
      padding: 40px 40px 24px;
      @media (max-width: 1200px) {
        padding: 20px 20px 24px;
      }
    }
  }
  .middleRow {
    background: ${({ theme }) => theme.palette.primary.default};
  }
  .bottomRow {
    background: ${({ theme }) => theme.palette.common.white};
    &.second {
      padding: 32px 40px 40px;
      @media (max-width: 1200px) {
        padding: 20px 20px 20px;
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
  .topRow,
  .middleRow,
  .bottomRow {
    padding: 40px 40px 40px 80px;
  }
  @media (max-width: 1200px) {
    .topRow,
    .middleRow,
    .bottomRow {
      padding: 20px;
      @media (max-width: 500px) {
        > div:first-child {
          width: 40%;
          text-align: start;
          align-items: flex-start;
        }
        > div:last-child {
          width: 40%;
          text-align: end;
          align-items: flex-end;
        }
      }
    }
  }
`;

export const TableRight = styled.div`
  box-shadow: 0px 0px 24px rgba(202, 202, 202, 0.25);
  width: 50%;
  margin-top: 20.89px;
  .topRow,
  .middleRow,
  .bottomRow {
    padding: 40px;
  }
  @media (max-width: 1200px) {
    margin-top: 1px;
    .topRow,
    .middleRow,
    .bottomRow {
      padding: 20px;
      @media (max-width: 500px) {
        > div:first-child {
          width: 40%;
          text-align: start;
          align-items: flex-start;
        }
        > div:last-child {
          width: 40%;
          text-align: end;
          align-items: flex-end;
        }
      }
    }
  }
`;
