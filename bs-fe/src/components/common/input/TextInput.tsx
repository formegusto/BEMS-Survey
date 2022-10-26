import { WHITES } from "@style/color";
import { fontStyles, Tag1 } from "@style/font";
import styled, { StyledProps } from "styled-components";
import { TextInputProps } from "./types";

export function TextInput({
  suffix,
  ...inputProps
}: TextInputProps & StyledProps<any>) {
  return (
    <Wrap className="text-input">
      <STextInput {...inputProps} className={`${suffix ? "has-suffix" : ""}`} />
      {suffix && <Tag1 className="suffix">{suffix}</Tag1>}
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;

  width: 155px;
  height: 28px;

  & > .suffix {
    position: absolute;

    top: 0;
    right: 8px;

    height: 28px;
    padding: 6px 0 0;

    color: ${WHITES[4]};
  }
`;

const STextInput = styled.input`
  height: 28px;
  width: 100%;

  background: none;
  outline: none;
  border: none;
  border-bottom: 1px solid ${WHITES[4]};
  transition: 0.2s;
  padding: 0 8px 0;
  box-sizing: border-box;
  color: ${WHITES[10]};
  ${fontStyles["tag1"]}

  &.has-suffix {
    padding: 0 30px 0 8px;
  }

  &::placeholder {
    color: ${WHITES[4]};
  }

  &:hover,
  &:focus {
    border-bottom: 1px solid ${WHITES[10]};
    color: ${WHITES[10]};

    & + .suffix {
      color: ${WHITES[10]};
    }
  }
`;
