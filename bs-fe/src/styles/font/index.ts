import styled, { css } from "styled-components";
import { FontStyles } from "./types";

export const fontStyles: FontStyles = {
  h1: css`
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 1.25em;
  `,
  h2: css`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.25em;
  `,
  p1: css`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.25em;
  `,
  p2: css`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.25em;
  `,
  p3: css`
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 1.25em;
  `,
  tag1: css`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.25em;
  `,
  tag2: css`
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 1.25em;
  `,
};

export const H1 = styled.h1`
  ${fontStyles["h1"]}
`;

export const H2 = styled.h2`
  ${fontStyles["h2"]}
`;

export const P1 = styled.p`
  ${fontStyles["p1"]}
`;

export const P2 = styled.p`
  ${fontStyles["p2"]}
`;

export const P3 = styled.p`
  ${fontStyles["p3"]}
`;

export const Tag1 = styled.span`
  ${fontStyles["tag1"]}
`;

export const Tag2 = styled.span`
  ${fontStyles["tag2"]}
`;
