import {
  ArrowButton,
  BoxRadio,
  Question,
  QuestionGroup,
  SelectBox,
  SelectGroup,
} from "@components/common";
import { FDetailInfo, InputProps } from "@store/types";
import { Wrap } from "./styles";
import { ComponentProps } from "./types";

function DetailComponent({
  data,
  types,
  rank1Watch,
  rank2Watch,
  register,
  onSubmit,
  setValue,
}: ComponentProps & InputProps<FDetailInfo>) {
  return (
    <Wrap onSubmit={onSubmit}>
      <QuestionGroup>
        {data.map((d, idx) => (
          <Question
            key={`detail-question-${idx}`}
            question={`${d.sequence}.${d.question}`}
          >
            <BoxRadio
              values={d.values}
              {...register(d._id)}
              setValue={setValue!}
              required
            />
          </Question>
        ))}
        <Question question="12. 설문 참여자 거주 공간의 만족도에 영향을 주는 주요 요인 3개를 1순위부터 3순위까지 선택해주세요.">
          <SelectGroup>
            <SelectBox
              title="1순위"
              values={types}
              {...register("1rank")}
              setValue={setValue!}
              required
            />
            <SelectBox
              title="2순위"
              values={types}
              {...register("2rank")}
              setValue={setValue!}
              isDisable={!rank1Watch}
              required
            />
            <SelectBox
              title="3순위"
              values={types}
              {...register("3rank")}
              setValue={setValue!}
              isDisable={!rank2Watch}
              required
            />
          </SelectGroup>
        </Question>
      </QuestionGroup>
      <ArrowButton type="submit">제출</ArrowButton>
    </Wrap>
  );
}

export { DetailComponent };
