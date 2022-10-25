import { Button } from "@components/common";
import { H1, H2 } from "@style/font";
import { useNavigate } from "react-router-dom";
import { BackgroundImg, Block, Wrap } from "./styles";

function MainComponent() {
  const navigate = useNavigate();

  return (
    <Wrap>
      <BackgroundImg
        src="http://localhost:8080/static/building/building-1656563478294.jpeg"
        alt="building-img"
      />
      <Block>
        <H1 className="building">동신대학교 중앙도서관</H1>
        <H2 className="unit">2층 자기주도 학습실</H2>
        <Button isBlock onClick={() => navigate("/basic")}>
          설문조사 시작하기
        </Button>
      </Block>
    </Wrap>
  );
}

export { MainComponent };
