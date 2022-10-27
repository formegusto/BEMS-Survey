import styled from "styled-components";
import { MdArrowDropDown } from "react-icons/md";
import { BLUE1, WHITES } from "@style/color";
import { fontStyles, P3 } from "@style/font";
import React from "react";
import { SelectBoxProps } from "./types";

function CSelectBox(
  {
    name,
    title,
    values,
    isDisable,
    setValue: setUseValue,
    ...htmlProps
  }: SelectBoxProps & React.HTMLProps<HTMLInputElement>,
  ref: React.Ref<HTMLInputElement>
) {
  const [down, onDown] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string | null>(null);

  const toggle = React.useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onDown((prev) => !prev);
  }, []);

  const hideDrop = React.useCallback(() => {
    onDown(false);
  }, []);

  const onClick = React.useCallback((value: string) => {
    setValue(value);
  }, []);

  React.useEffect(() => {
    setUseValue(name!, value);
  }, [name, value, setUseValue]);

  React.useEffect(() => {
    if (down) {
      window.addEventListener("click", hideDrop);
    } else {
      window.removeEventListener("click", hideDrop);
    }
  }, [hideDrop, down]);

  return (
    <Wrap
      className={[
        "select-box",
        down ? "active" : "",
        isDisable ? "disable" : "",
      ].join(" ")}
    >
      <label
        htmlFor="select-box-value"
        onClick={isDisable ? undefined : toggle}
      >
        <P3>{value ? value : title}</P3>
        <MdArrowDropDown size={14} />
      </label>
      <input
        name={name}
        ref={ref}
        id="select-box-value"
        {...htmlProps}
        value={value ? value : ""}
      />
      <DropDownWrap>
        {values.map((v, idx) => (
          <DropDownItem
            key={`${title}-select-${idx}`}
            onClick={() => onClick(v)}
          >
            {v}
          </DropDownItem>
        ))}
      </DropDownWrap>
    </Wrap>
  );
}

export const SelectBox = React.forwardRef(CSelectBox);

const Wrap = styled.div`
  position: relative;
  width: 64px;
  height: 28px;
  color: ${WHITES[10]};

  & > input {
    position: absolute;

    width: 0;
    height: 0;
    opacity: 0;
    bottom: 0;
    left: 50%;
  }

  & > ul {
    transform-origin: 50% 0;
    transition: 0.3s;
    transform: scaleY(0);

    & > li {
      transition: 1s;
      opacity: 0;
    }
  }

  & > label {
    width: 100%;
    height: 28px;
    display: flex;
    flex-direction: row;
    column-gap: 4px;

    cursor: pointer;

    justify-content: space-between;
    align-items: center;
    padding: 0 8px;

    border-bottom: 1px solid ${WHITES[10]};

    box-sizing: border-box;
    & > svg {
      transition: 0.3s;
    }
  }

  &.active {
    & > label > svg {
      transform: rotateZ(180deg);
    }

    & > ul {
      transform: scaleY(1);

      & > li {
        opacity: 1;
      }
    }
  }

  &.disable {
    opacity: 0.5;
  }
`;

const DropDownWrap = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;

  display: flex;
  flex-direction: column;

  width: 100%;
  background: ${WHITES[10]};

  padding: 4px 0;
  row-gap: 2px;
  border-radius: 0 0 4px 4px;

  z-index: 6;
  color: ${BLUE1};
`;

const DropDownItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 56px;
  height: 28px;

  width: 100%;
  padding: 0 16px;
  ${fontStyles["p3"]};
`;
