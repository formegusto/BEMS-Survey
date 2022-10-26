import styled from "styled-components";
import { TransitionGroup } from "react-transition-group";

export const PageTransition = styled(TransitionGroup)`
  width: 100%;
  height: 100%;

  position: relative;
  overflow-y: visible;

  & > * {
    position: absolute;
    top: 0;
    left: 0;

    transition: 0.3s;
    transform-origin: 50% 50%;

    overflow-y: scroll;
  }

  & > .trans-exit {
    /* transform: translateX(0); */
    opacity: 0;
  }

  & > .trans-exit-active {
    /* transform: translateX(calc(-100% - 12px)); */
    opacity: 0;
  }

  & > .trans-enter {
    /* transform: translateX(calc(100% + 12px)); */
    transform: scale(0.95, 0.95);
    opacity: 0;
  }

  & > .trans-enter-active {
    /* transform: translateX(0); */
    transform: scale(1, 1);
    opacity: 1;
  }
`;
