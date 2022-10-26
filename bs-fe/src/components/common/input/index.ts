import styled from "styled-components";

export * from "./text";
export * from "./SelectBox";
export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  column-gap: 8px;

  & > input[type="text"] {
    flex: 1;
    width: 0;
  }
`;
