import { Button } from "@components/common";
import { H1, H2 } from "@style/font";
import { BackgroundImg, Block, Wrap } from "./styles";
import { ComponentProps } from "./types";

function MainComponent({ onStart, building, unit }: ComponentProps) {
  return (
    <Wrap>
      <BackgroundImg
        src={`${process.env.REACT_APP_BACK_END_API_SERVER}${building.image}`}
        alt="building-img"
      />
      <Block>
        <H1 className="building">{building.name}</H1>
        <H2 className="unit">{unit.name}</H2>
        <Button isBlock onClick={onStart}>
          설문조사 시작하기
        </Button>
      </Block>
    </Wrap>
  );
}

export { MainComponent };
export * from "./Policy";
