import { WHITES } from "@style/color";
import { fontStyles } from "@style/font";
import styled from "styled-components";

function BoxRadio() {
  const name = "radio";

  return (
    <Wrap>
      {Array(10)
        .fill(0)
        .map((_, idx) => (
          <Block key={idx}>
            <input id={`${name}-${idx}`} type="radio" name={name} value={idx} />
            <RadioFrame htmlFor={`${name}-${idx}`}>{idx}</RadioFrame>
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
`;

const Block = styled.div`
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

  width: 24px;
  height: 24px;

  color: ${WHITES[6]};
  ${fontStyles["tag1"]};

  box-sizing: border-box;
  border: 1px solid ${WHITES[6]};

  transition: 0.3s;
`;

export { BoxRadio };
