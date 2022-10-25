import { FlattenSimpleInterpolation } from "styled-components";

export type FontType = "h1" | "h2" | "p1" | "p2" | "p3" | "tag1" | "tag2";
export type FontStyles = {
  [key in FontType]: FlattenSimpleInterpolation;
};
