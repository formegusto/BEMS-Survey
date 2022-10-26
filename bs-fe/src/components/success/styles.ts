import { WHITES } from "@style/color";
import styled from "styled-components";

export const Block = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: calc(100%);
  height: calc(100%);

  background: rgba(38, 68, 109, 0.5);
  color: ${WHITES[10]};
`;
