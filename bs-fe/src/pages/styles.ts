import styled from "styled-components";
import { TransitionGroup } from "react-transition-group";

export const PageTransition = styled(TransitionGroup)`
  width: 100%;
  height: 100%;

  position: relative;

  & > * {
    position: absolute;
    top: 0;
    left: 0;

    transition: 0.3s;
    transform-origin: 50% 50%;
  }

  & > .trans-exit {
    /* transform: translateX(0); */
    opacity: 1;
  }

  & > .trans-exit-active {
    /* transform: translateX(calc(-100% - 12px)); */
    opacity: 0;
  }

  & > .trans-enter {
    /* transform: translateX(calc(100% + 12px)); */
    transform: scale(0.7, 0.7);
    opacity: 0;
  }

  & > .trans-enter-active {
    /* transform: translateX(0); */
    transform: scale(1, 1);
    opacity: 1;
  }
`;
