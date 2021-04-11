import React from "react";
import {
  TableMain,
  TableRight,
  TableLeft,
  TopRowLeft,
  MiddleRowLeft,
  BottomRowLeft,
  TopRowRight,
  MiddleRowRight,
  BottomRowRight,
  RowFirstChild,
  RowSecondChild,
  Container,
  Badge,
} from "./styles";
import { Span, Header4 } from "../Fonts/styles";
import { Flex } from "../Box/styles";
import { CheckIcon } from "../../assest/svg";

const Table = () => {
  return (
    <TableMain>
      <Container direction="row" align="flex-start">
        <TableLeft>
          <Flex direction="column">
            <TopRowLeft justify="space-between">
              <RowFirstChild width="max-content" align="flex-end">
                <Header4
                  size="24px"
                  colorTheme="primary/main"
                  weight="700"
                  lineHeight="26.4px"
                >
                  What we offer
                </Header4>
              </RowFirstChild>
              <RowSecondChild width="max-content" align="flex-end">
                <Span colorTheme="grey[200]" size="18px" lineHeight="20px" bold>
                  College Application
                </Span>
              </RowSecondChild>
            </TopRowLeft>

            <MiddleRowLeft
              justify="space-between"
              className="middleRow"
              flexWrap="nowrap"
            >
              <RowFirstChild width="max-content" align="flex-end">
                <Span
                  colorTheme="white"
                  size="20px"
                  lineHeight="22px"
                  weight="700"
                >
                  Trav4College
                </Span>
              </RowFirstChild>
              <RowSecondChild
                width="max-content"
                align="flex-end"
                direction="column"
              >
                <Span
                  colorTheme="white"
                  size="20px"
                  lineHeight="22px"
                  weight="700"
                >
                  150.00{" "}
                  <Span colorTheme="white" size="20px" lineHeight="22px">
                    United States Dollars
                  </Span>
                </Span>
                <Span
                  colorTheme="success/main"
                  weight="600"
                  size="20px"
                  lineHeight="28px"
                >
                  -92% OFF
                </Span>
              </RowSecondChild>
              <Badge width="max-content">
                <CheckIcon width="15px" height="20px" color="white" />
                <CheckIcon width="15px" height="20px" color="white" />
                <Span colorTheme="white" size="16px" lineieght="18px" bold>
                  Chepeast
                </Span>
              </Badge>
            </MiddleRowLeft>

            <BottomRowLeft
              justify="space-between"
              className="bottomRow"
              flexWrap="nowrap"
            >
              <RowFirstChild width="max-content" align="flex-end">
                <Span
                  colorTheme="grey/default"
                  size="20px"
                  lineHeight="22px"
                  bold
                >
                  Trav4College
                </Span>
              </RowFirstChild>
              <RowSecondChild
                width="max-content"
                align="flex-end"
                direction="column"
              >
                <Span
                  colorTheme="grey/default"
                  size="20px"
                  lineHeight="22px"
                  weight="700"
                >
                  200.00{" "}
                  <Span colorTheme="grey/default" size="20px" lineHeight="22px">
                    United States Dollars
                  </Span>
                </Span>
                <Span
                  colorTheme="primary/main"
                  weight="600"
                  size="20px"
                  lineHeight="28px"
                >
                  0% OFF
                </Span>
              </RowSecondChild>
            </BottomRowLeft>
          </Flex>
        </TableLeft>
        {/* --------------right side of the table------------------- */}
        <TableRight>
          <Flex direction="column">
            <TopRowRight justify="space-between" className="topRow second">
              <RowFirstChild width="max-content" align="flex-end">
                <Span colorTheme="grey[200]" size="18px" lineHeight="20px" bold>
                  Study Consultancy
                </Span>
              </RowFirstChild>
              <RowSecondChild width="max-content" align="flex-end">
                <Span colorTheme="grey[200]" size="18px" lineHeight="20px" bold>
                  Feedback Time
                </Span>
              </RowSecondChild>
            </TopRowRight>

            <MiddleRowRight
              justify="space-between"
              className="middleRow"
              flexWrap="nowrap"
            >
              <RowFirstChild
                width="max-content"
                align="flex-end"
                direction="column"
              >
                <Span
                  colorTheme="white"
                  size="20px"
                  lineHeight="22px"
                  weight="700"
                >
                  150.00{" "}
                  <Span colorTheme="white" size="20px" lineHeight="22px">
                    United States Dollars
                  </Span>
                </Span>
                <Span
                  colorTheme="success/main"
                  weight="600"
                  size="20px"
                  lineHeight="28px"
                >
                  -92% OFF
                </Span>
              </RowFirstChild>
              <RowSecondChild width="max-content" align="flex-end">
                <Span colorTheme="white" size="18px" lineHeight="22px" bold>
                  Instant feedback time
                </Span>
              </RowSecondChild>
            </MiddleRowRight>

            <BottomRowRight
              justify="space-between"
              className="bottomRow second"
            >
              <RowFirstChild
                width="max-content"
                align="flex-end"
                direction="column"
              >
                <Span
                  colorTheme="grey/default"
                  size="20px"
                  lineHeight="22px"
                  weight="700"
                >
                  200.00{" "}
                  <Span colorTheme="grey/default" size="20px" lineHeight="22px">
                    United States Dollars
                  </Span>
                </Span>
                <Span
                  colorTheme="primary/main"
                  weight="600"
                  size="20px"
                  lineHeight="28px"
                >
                  0% OFF
                </Span>
              </RowFirstChild>
              <RowSecondChild width="max-content" align="flex-end">
                <Span colorTheme="grey[200]" size="18px" lineHeight="20px" bold>
                  Over 2 weeks
                </Span>
              </RowSecondChild>
            </BottomRowRight>
          </Flex>
        </TableRight>
      </Container>
    </TableMain>
  );
};

export default Table;
