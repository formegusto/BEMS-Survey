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

function DetailComponent() {
  const navigate = useNavigate();

  const onClick = React.useCallback(() => {
    navigate("/success");
  }, [navigate]);

  return (
    <Wrap>
      <QuestionGroup>
        <Question question="1. 설문 참여자 거주 공간의 온도만족도를 선택해주세요.">
          <BoxRadio />
        </Question>
        <Question question="2. 설문 참여자 거주 공간의 열 만족도를 선택해주세요.">
          <BoxRadio />
        </Question>
        <Question question="3. 설문 참여자 거주 공간의 습도 만족도를 선택해주세요.">
          <BoxRadio />
        </Question>
        <Question question="4. 설문 참여자 거주 공간의 바람세기 만족도를 선택해주세요.">
          <BoxRadio />
        </Question>
        <Question question="5. 설문 참여자 거주 공간의 조명밝기 만족도를 선택해주세요.">
          <BoxRadio />
        </Question>
        <Question question="6. 설문 참여자 거주 공간의 먼지 및 악취 만족도를 선택해주세요.">
          <BoxRadio />
        </Question>
        <Question question="7. 설문 참여자 거주 공간의 소음 만족도를 선택해주세요.">
          <BoxRadio />
        </Question>
        <Question question="8. 설문 참여자 거주 공간의 쾌적 만족도를 선택해주세요.">
          <BoxRadio />
        </Question>
        <Question question="9. 설문 참여자 거주 공간의 피부온도 만족도를 선택해주세요.">
          <BoxRadio />
        </Question>
        <Question question="10. 설문 참여자 거주 공간의 체온 만족도를 선택해주세요.">
          <BoxRadio />
        </Question>
        <Question question="11. 설문 참여자 거주 공간의 전체적인 만족도를 평가해주세요.">
          <BoxRadio />
        </Question>
        <Question question="12. 설문 참여자 거주 공간의 전체적인 만족도를 평가해주세요.">
          <BoxRadio />
        </Question>
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
