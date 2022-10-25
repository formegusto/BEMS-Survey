import items from "./items";
import { SNavItem, Wrap } from "./styles";

function Nav() {
  return (
    <Wrap>
      {items.map((item, idx) => (
        <SNavItem key={`nav-link-${idx}`} to={item.to}>
          {item.name}
        </SNavItem>
      ))}
    </Wrap>
  );
}

export { Nav };
