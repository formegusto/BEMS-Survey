import { Button } from "@components/common";
import { H1, H2 } from "@style/font";
import { BackgroundImg, Block, Wrap } from "./styles";
import { ComponentProps } from "./types";

function MainComponent({ onStart }: ComponentProps) {
  return (
    <Wrap>
      <BackgroundImg
        src={`${process.env.REACT_APP_BACK_END_API_SERVER}/static/building/building-1656563478294.jpeg`}
        alt="building-img"
      />
      <Block>
        <H1 className="building">동신대학교 중앙도서관</H1>
        <H2 className="unit">2층 자기주도 학습실</H2>
        <Button isBlock onClick={onStart}>
          설문조사 시작하기
        </Button>
      </Block>
    </Wrap>
  );
}

export { MainComponent };
export * from "./Policy";
