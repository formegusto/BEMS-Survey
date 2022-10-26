import styled from "styled-components";
import { MdArrowDropDown } from "react-icons/md";
import { WHITES } from "@style/color";
import { fontStyles, P3 } from "@style/font";
import React from "react";

export function SelectBox() {
  const [down, onDown] = React.useState<boolean>(false);

  const toggle = React.useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    onDown((prev) => !prev);
  }, []);

  return (
    <Wrap className={["select-box", down ? "active" : ""].join(" ")}>
      <label htmlFor="select-box-value" onClick={toggle}>
        <P3>성별</P3>
        <MdArrowDropDown size={14} />
      </label>
      <input id="select-box-value" />
      <DropDownWrap>
        <DropDownItem>남</DropDownItem>
        <DropDownItem>여</DropDownItem>
      </DropDownWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;
  width: 64px;
  height: 28px;
  color: ${WHITES[10]};

  & > input {
    display: none;
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
`;

const DropDownWrap = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;

  display: flex;
  flex-direction: column;

  width: 100%;
  background: ${WHITES[5]};

  padding: 4px 0;
  row-gap: 2px;
  border-radius: 0 0 4px 4px;

  z-index: 6;
`;

const DropDownItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 56px;
  height: 28px;

  ${fontStyles["p3"]};
`;
