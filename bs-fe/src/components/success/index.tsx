import { BackgroundImg, Wrap } from "@components/main/styles";
import { RootReducer, TargetStore } from "@store";
import { H1, H2 } from "@style/font";
import { useSelector } from "react-redux";
import { Block } from "./styles";

function SuccessComponent() {
  const { building } = useSelector<RootReducer, TargetStore>(
    ({ target }) => target
  );

  return (
    <Wrap>
      <BackgroundImg
        src={`${process.env.REACT_APP_BACK_END_API_SERVER}${building?.image}`}
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
