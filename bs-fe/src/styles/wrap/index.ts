import styled from "styled-components";
import { ScreenProps } from "./types";

export const FullScreen = styled.div<ScreenProps>`
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh) * 100);

  position: ${({ position }) => (position ? position : "relative")};
`;
