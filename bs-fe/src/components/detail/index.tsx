import {
  ArrowButton,
  BoxRadio,
  Question,
  QuestionGroup,
  SelectBox,
  SelectGroup,
} from "@components/common";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Wrap } from "./styles";
import { datas } from "./types";

function DetailComponent() {
  const navigate = useNavigate();

  const onClick = React.useCallback(() => {
    navigate("/success");
  }, [navigate]);

  return (
    <Wrap>
      <QuestionGroup>
        {datas.map((d, idx) => (
          <Question key={`detail-question-${idx}`} question={d.question}>
            <BoxRadio name={d._id} values={d.values} />
          </Question>
        ))}
        <Question question="13. 설문 참여자 거주 공간의 만족도에 영향을 주는 주요 요인 3개를 1순위부터 3순위까지 선택해주세요.">
          <SelectGroup>
            <SelectBox title="성별" values={["남", "여"]} />
            <SelectBox title="성별" values={["남", "여"]} isDisable />
            <SelectBox title="성별" values={["남", "여"]} isDisable />
          </SelectGroup>
        </Question>
      </QuestionGroup>
      <ArrowButton onClick={onClick}>제출</ArrowButton>
    </Wrap>
  );
}

export { DetailComponent };
