import { WHITES } from "@style/color";
import styled from "styled-components";

export const Wrap = styled.div`
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;

  width: 100vw;
  height: 100vh;
  height: calc(var(--vh) * 100);

  z-index: 255;
`;

export const BackgroundImg = styled.img`
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;
`;

export const Block = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  width: calc(100% - 24px);
  height: calc(100% - 48px);
  padding: 24px 12px;

  background: linear-gradient(0deg, #26446d 25%, rgba(38, 68, 109, 0.1) 100%);

  & > .building {
    color: ${WHITES[10]};
  }
  & > .unit {
    color: ${WHITES[6]};
    margin: 0 0 48px;
  }
`;
