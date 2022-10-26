import styled from "styled-components";

export * from "./TextInput";
export * from "./SelectBox";
export * from "./BoxRadio";
export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  column-gap: 8px;

  & > .text-input {
    flex: 1;
    width: 0;
  }
`;
export const SelectGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 14px;

  & > .select-box {
    width: 150px;
  }
`;
