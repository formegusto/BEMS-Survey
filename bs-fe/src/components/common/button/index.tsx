import { BLUE2, WHITES } from "@style/color";
import { fontStyles } from "@style/font";
import styled, { css } from "styled-components";
import { ButtonProps } from "./types";

export const Button = styled.button<ButtonProps>`
  ${fontStyles["tag1"]};
  border: none;
  background: ${BLUE2};
  color: ${WHITES[10]};
  border-radius: 8px;

  ${({ isBlock }) =>
    isBlock
      ? css`
          display: block;
          width: 100%;
          padding: 10px 0;
        `
      : css`
          padding: 10px 24px;
        `};
`;
