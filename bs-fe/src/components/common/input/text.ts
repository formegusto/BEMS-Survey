import { WHITES } from "@style/color";
import styled from "styled-components";

export const TextInput = styled.input`
  height: 28px;
  width: 155px;

  background: none;
  outline: none;
  border: none;
  border-bottom: 1px solid ${WHITES[4]};
  transition: 0.2s;
  padding: 0 8px;
  box-sizing: border-box;
  color: ${WHITES[10]};
  &::placeholder {
    color: ${WHITES[4]};
  }

  &:hover,
  &:focus {
    border-bottom: 1px solid ${WHITES[10]};
    color: ${WHITES[10]};
  }
`;
