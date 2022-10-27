import { WHITES } from "@style/color";
import { fontStyles } from "@style/font";
import styled from "styled-components";
import { BoxRadioProps } from "./types";

function BoxRadio({ name, values }: BoxRadioProps) {
  return (
    <Wrap>
      {values.map((v, idx) => (
        <Block key={idx}>
          <input id={`${name}-${idx}`} type="radio" name={name} value={v} />
          <RadioFrame htmlFor={`${name}-${idx}`}>{v}</RadioFrame>
        </Block>
      ))}
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  height: 28px;

  column-gap: 10px;
`;

const Block = styled.div`
  flex: 1;
  & > input {
    display: none;
  }

  & > input[type="radio"]:checked + label {
    color: ${WHITES[10]};
    border: 1px solid ${WHITES[10]};
  }
`;

const RadioFrame = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 27px;

  color: ${WHITES[2]};
  ${fontStyles["tag1"]};

  box-sizing: border-box;
  border: 1px solid ${WHITES[2]};

  transition: 0.3s;
`;

export { BoxRadio };
