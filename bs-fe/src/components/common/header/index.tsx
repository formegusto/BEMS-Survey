import { Tag1, Tag2 } from "@style/font";
import { Nav } from "../nav";
import { Block, Wrap } from "./styles";

function Header() {
  return (
    <Wrap>
      <Block>
        <Tag1 className="building">동신대학교 중앙도서관</Tag1>
        <Tag2 className="unit">2층 자기주도 학습실</Tag2>
        <Nav />
      </Block>
    </Wrap>
  );
}

export { Header };