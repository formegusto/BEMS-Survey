import { BackgroundImg, Wrap } from "@components/main/styles";
import { H1, H2 } from "@style/font";
import { Block } from "./styles";

function SuccessComponent() {
  return (
    <Wrap>
      <BackgroundImg
        src="http://localhost:8080/static/building/building-1656563478294.jpeg"
        alt="building-img"
      />
      <Block>
        <H1>제출 완료</H1>
        <H2>참여해 주셔서 감사합니다.</H2>
      </Block>
    </Wrap>
  );
}

export { SuccessComponent };
