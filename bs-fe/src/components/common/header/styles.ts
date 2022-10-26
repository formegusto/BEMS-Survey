import { BLUE1, WHITES } from "@style/color";
import styled from "styled-components";

export const Wrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 90px;

  padding: 24px 12px 8px;
  box-sizing: border-box;

  background: ${BLUE1};

  z-index: 3;
`;

export const Block = styled.div`
  width: 100%;
  height: 100%;

  padding: 0 24px;
  box-sizing: border-box;

  border-left: 1px solid ${WHITES[8]};

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  & > .building {
    color: ${WHITES[10]};
    margin: 0 0 2px;
  }

  & > .unit {
    margin: 0 0 6px;
    color: ${WHITES[8]};
  }
`;
