import { WHITES } from "@style/color";
import { fontStyles } from "@style/font";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SNavItem = styled(NavLink)``;

export const Wrap = styled.div`
  display: flex;
  align-items: flex-end;
  height: 18px;
  column-gap: 6px;
  & > a {
    transition: 0.2s;

    &:not(.active) {
      color: ${WHITES[6]};
      ${fontStyles["tag2"]};
    }

    &.active {
      color: ${WHITES[10]};
      ${fontStyles["p2"]}
    }
  }
`;
