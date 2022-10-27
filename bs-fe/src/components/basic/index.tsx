import {
  ArrowButton,
  InputGroup,
  SelectBox,
  TextInput,
  BoxRadio,
  Question,
  QuestionGroup,
} from "@components/common";
import { FBasicInfo, InputProps } from "@store/types";
import { Wrap } from "./styles";

function BasicComponent({
  register,
  onSubmit,
  setValue,
}: InputProps<FBasicInfo>) {
  return (
    <Wrap onSubmit={onSubmit}>
      <QuestionGroup>
        <Question question="1. 설문 참여자의 성명, 나이, 성별을 입력해주세요.">
          <InputGroup>
            <TextInput placeholder="성명" {...register("name")} required />
            <TextInput placeholder="나이" {...register("age")} required />
            <SelectBox
              title="성별"
              values={["남", "여"]}
              {...register("sex")}
              required
              setValue={setValue!}
            />
          </InputGroup>
        </Question>
        <Question question="2. 설문 참여자의 현재 위치를 선택해주세요.">
          <BoxRadio
            values={["창가", "에어컨", "히터", "해당사항 없음"]}
            {...register("position")}
            required
            setValue={setValue!}
          />
        </Question>
        <Question question="3. 공간 내 동료 인원수를 입력해주세요.">
          <TextInput
            suffix="명"
            placeholder="n"
            {...register("numOfPeople")}
            required
          />
        </Question>
        <Question question="4. 일일 근무시간을 입력해주세요.">
          <TextInput
            suffix="시간"
            placeholder="h"
            {...register("workingTime")}
            required
          />
        </Question>
      </QuestionGroup>
      <ArrowButton type="submit">다음</ArrowButton>
    </Wrap>
  );
}

export { BasicComponent };
