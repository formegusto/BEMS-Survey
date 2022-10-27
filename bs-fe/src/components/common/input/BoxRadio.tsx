import { WHITES } from "@style/color";
import { fontStyles } from "@style/font";
import React from "react";
import styled from "styled-components";
import { BoxRadioProps } from "./types";

function CBoxRadio(
  {
    name,
    values,
    setValue: setUseValue,
    ...htmlProps
  }: BoxRadioProps & React.HTMLProps<HTMLInputElement>,
  ref: React.Ref<HTMLInputElement>
) {
  const [value, setValue] = React.useState<string | number | null>(null);

  const onChange = React.useCallback((value: string | number) => {
    setValue(value);
  }, []);

  React.useEffect(() => {
    setUseValue(name!, value);
  }, [name, value, setUseValue]);

  const onFocus = React.useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    const { top } = e.target.getBoundingClientRect();

    window.scrollTo({
      top: top - 152.5,
    });
  }, []);

  return (
    <Wrap>
      <input
        id={`radio-text-${name}`}
        ref={ref}
        type="text"
        {...htmlProps}
        value={value ? value : ""}
        onFocus={onFocus}
      />
      {values.map((v, idx) => (
        <Block
          key={`name-radio-${idx}`}
          onClick={() => onChange(v)}
          className={[value === v ? "active" : ""].join(" ")}
        >
          {v}
        </Block>
      ))}
    </Wrap>
  );
}

const BoxRadio = React.forwardRef(CBoxRadio);

const Wrap = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  height: 28px;

  column-gap: 10px;

  & > input {
    position: absolute;
    bottom: -6px;
    left: 50%;

    width: 0px;
    height: 0px;
    border: none;
    opacity: 0;
  }
`;

const Block = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 27px;

  color: ${WHITES[10]};
  ${fontStyles["tag1"]};

  box-sizing: border-box;
  border: 1px solid ${WHITES[10]};

  transition: 0.3s;

  &:not(.active) {
    opacity: 0.2;
  }
`;

export { BoxRadio };
