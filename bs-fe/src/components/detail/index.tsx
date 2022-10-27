import {
  ArrowButton,
  BoxRadio,
  Question,
  QuestionGroup,
  SelectBox,
  SelectGroup,
} from "@components/common";
import { FDetailInfo, InputProps } from "@store/types";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Wrap } from "./styles";
import { datas } from "./types";

function DetailComponent({
  register,
  onSubmit,
  setValue,
}: InputProps<FDetailInfo>) {
  const navigate = useNavigate();

  const onClick = React.useCallback(() => {
    navigate("/success");
  }, [navigate]);

  return (
    <Wrap onSubmit={onSubmit}>
      <QuestionGroup>
        {datas.map((d, idx) => (
          <Question key={`detail-question-${idx}`} question={d.question}>
            <BoxRadio
              values={d.values}
              {...register(d._id)}
              setValue={setValue!}
            />
          </Question>
        ))}
        <Question question="13. 설문 참여자 거주 공간의 만족도에 영향을 주는 주요 요인 3개를 1순위부터 3순위까지 선택해주세요.">
          <SelectGroup>
            <SelectBox
              title="1순위"
              values={["남", "여"]}
              {...register("1rank")}
              setValue={setValue!}
            />
            <SelectBox
              title="2순위"
              values={["남", "여"]}
              {...register("2rank")}
              setValue={setValue!}
              isDisable
            />
            <SelectBox
              title="3순위"
              values={["남", "여"]}
              {...register("3rank")}
              setValue={setValue!}
              isDisable
            />
          </SelectGroup>
        </Question>
      </QuestionGroup>
      <ArrowButton onClick={onClick}>제출</ArrowButton>
    </Wrap>
  );
}

export { DetailComponent };
