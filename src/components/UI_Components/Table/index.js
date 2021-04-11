import React from "react";
import { TableMain, TableRight, TableLeft } from "./styles";
import { Span, Header4 } from "../Fonts/styles";
import { Flex, Grid } from "../Box/styles";

const Table = ({}) => {
  return (
    <TableMain>
      <Flex direction="row" align="flex-start">
        <TableLeft>
          <Flex direction="column">
            <Flex justify="space-between" className="topRow">
              <div>
                <Header4
                  size="24px"
                  colorTheme="primary/main"
                  weight="700"
                  lineHeight="26.4px"
                >
                  What we offer
                </Header4>
              </div>
              <div>
                <Span colorTheme="grey[200]" size="18px" lineHeight="20px" bold>
                  College Application
                </Span>
              </div>
            </Flex>

            <Flex
              justify="space-between"
              className="middleRow"
              flexWrap="nowrap"
            >
              <div>
                <Span
                  colorTheme="white"
                  size="18px"
                  lineHeight="22px"
                  weight="700"
                >
                  Trav4College
                </Span>
              </div>
              <Flex width="max-content" align="flex-end" direction="column">
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
              </Flex>
            </Flex>

            <Flex
              justify="space-between"
              className="bottomRow"
              flexWrap="nowrap"
            >
              <div>
                <Span
                  colorTheme="grey/default"
                  size="20px"
                  lineHeight="22px"
                  bold
                >
                  Trav4College
                </Span>
              </div>
              <Flex width="max-content" align="flex-end" direction="column">
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
              </Flex>
            </Flex>
          </Flex>
        </TableLeft>
        {/* --------------right side of the table------------------- */}
        <TableRight>
          <Flex direction="column">
            <Flex justify="space-between" className="topRow second">
              <div>
                <Span colorTheme="grey[200]" size="18px" lineHeight="20px" bold>
                  Study Consultancy
                </Span>
              </div>
              <div>
                <Span colorTheme="grey[200]" size="18px" lineHeight="20px" bold>
                  Feedback Time
                </Span>
              </div>
            </Flex>

            <Flex
              justify="space-between"
              className="middleRow"
              flexWrap="nowrap"
            >
              <Flex width="max-content" align="flex-end" direction="column">
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
              </Flex>
              <div>
                <Span colorTheme="white" size="18px" lineHeight="22px" bold>
                  Instant feedback time
                </Span>
              </div>
            </Flex>

            <Flex justify="space-between" className="bottomRow second">
              <Flex width="max-content" align="flex-end" direction="column">
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
              </Flex>
              <div>
                <Span colorTheme="grey[200]" size="18px" lineHeight="20px" bold>
                  Over 2 weeks
                </Span>
              </div>
            </Flex>
          </Flex>
        </TableRight>
      </Flex>
    </TableMain>
  );
};

export default Table;
