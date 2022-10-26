import { WHITES } from "@style/color";
import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  & > .question-text {
    color: ${WHITES[9]};
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 36px;
`;
