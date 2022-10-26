import { WHITES } from "@style/color";
import { fontStyles, Tag1 } from "@style/font";
import styled, { StyledProps } from "styled-components";
import { MdOutlineChevronRight } from "react-icons/md";

function ArrowButton({ children, ...htmlProps }: StyledProps<any>) {
  return (
    <Wrap className="arrow-btn" {...htmlProps}>
      <Tag1>{children}</Tag1>
      <MdOutlineChevronRight />
    </Wrap>
  );
}

const Wrap = styled.button`
  height: 18px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 4px;
  background: none;
  border: none;

  color: ${WHITES[10]};
  ${fontStyles["p2"]};
`;

export { ArrowButton };
