import { useLocation, useRoutes } from "react-router-dom";
import BasicPage from "./basic";
import DetailPage from "./detail";
import MainPage from "./main";
import SuccessPage from "./success";
import { CSSTransition } from "react-transition-group";
import { Slider } from "./styles";

function Pages() {
  const location = useLocation();
  const routes = useRoutes(
    [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/basic",
        element: <BasicPage />,
      },
      {
        path: "/detail",
        element: <DetailPage />,
      },
      {
        path: "/success",
        element: <SuccessPage />,
      },
    ],
    location
  );

  return (
    <Slider>
      <CSSTransition key={location.pathname} classNames="right" timeout={300}>
        {routes}
      </CSSTransition>
    </Slider>
  );
}

export * from "./Template";
export { Pages };
