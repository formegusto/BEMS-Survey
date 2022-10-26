import { Tag2 } from "@style/font";
import React from "react";
import { Group, Wrap } from "./styles";
import { QuestionProps } from "./types";

function QuestionGroup({ children }: React.PropsWithChildren<any>) {
  return <Group>{children}</Group>;
}

function Question({
  question,
  children,
}: React.PropsWithChildren<QuestionProps>) {
  return (
    <Wrap>
      <Tag2 className="question-text">{question}</Tag2>
      {children}
    </Wrap>
  );
}

export { QuestionGroup };
export { Question };
