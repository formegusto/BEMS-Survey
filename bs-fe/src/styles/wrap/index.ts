import styled from "styled-components";
import { ScreenProps } from "./types";

export const FullScreen = styled.div<ScreenProps>`
  width: 100vw;
  height: 100vh;

  position: ${({ position }) => (position ? position : "relative")};
`;
