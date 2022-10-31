import { RootReducer, TargetStore } from "@store";
import { Tag1, Tag2 } from "@style/font";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Nav } from "../nav";
import { Block, Wrap } from "./styles";

const VIEWPATH = ["/basic", "/detail"];
function Header() {
  const { building, unit } = useSelector<RootReducer, TargetStore>(
    ({ target }) => target
  );
  const location = useLocation();
  return VIEWPATH.includes(location.pathname) ? (
    <Wrap>
      <Block>
        {building && unit && (
          <>
            <Tag1 className="building">{building.name}</Tag1>
            <Tag2 className="unit">{unit.name}</Tag2>
            <Nav />
          </>
        )}
      </Block>
    </Wrap>
  ) : (
    <></>
  );
}

export { Header };
