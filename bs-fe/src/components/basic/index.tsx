import {
  ArrowButton,
  InputGroup,
  SelectBox,
  TextInput,
  BoxRadio,
  Question,
  QuestionGroup,
} from "@components/common";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Wrap } from "./styles";

function BasicComponent() {
  const navigate = useNavigate();
  const onNext = React.useCallback(() => {
    navigate("/detail");
  }, [navigate]);

  return (
    <Wrap>
      <QuestionGroup>
        <Question question="1. 설문 참여자의 성명, 나이, 성별을 입력해주세요.">
          <InputGroup>
            <TextInput placeholder="성명" />
            <TextInput placeholder="나이" />
            <SelectBox title="성별" values={["남", "여"]} />
          </InputGroup>
        </Question>
        <Question question="2. 설문 참여자의 현재 위치를 선택해주세요.">
          <BoxRadio
            name="position"
            values={["창가", "에어컨", "히터", "해당사항 없음"]}
          />
        </Question>
        <Question question="3. 공간 내 동료 인원수를 입력해주세요.">
          <TextInput suffix="명" placeholder="n" />
        </Question>
        <Question question="4. 일일 근무시간을 입력해주세요.">
          <TextInput suffix="시간" placeholder="h" />
        </Question>
      </QuestionGroup>
      <ArrowButton onClick={onNext}>다음</ArrowButton>
    </Wrap>
  );
}

export { BasicComponent };
