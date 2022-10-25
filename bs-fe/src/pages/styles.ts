import styled from "styled-components";
import { TransitionGroup } from "react-transition-group";

export const Slider = styled(TransitionGroup)`
  width: 100%;
  height: 100%;

  position: relative;

  & > * {
    position: absolute;
    top: 0;
    left: 0;

    transition: 0.3s;
  }

  & > .right-exit {
    transform: translateX(0);
    opacity: 1;
  }

  & > .right-exit-active {
    transform: translateX(calc(-100% - 12px));
    opacity: 0;
  }

  & > .right-enter {
    transform: translateX(calc(100% + 12px));
    opacity: 0;
  }

  & > .right-enter-active {
    transform: translateX(0);
    opacity: 1;
  }
`;
