import { useLocation, useRoutes } from "react-router-dom";
import BasicPage from "./basic";
import DetailPage from "./detail";
import MainPage from "./main";
import SuccessPage from "./success";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
    <TransitionGroup className="slider">
      <CSSTransition key={location.pathname} className="right" timeout={5000}>
        {routes}
      </CSSTransition>
    </TransitionGroup>
  );
}

export * from "./Template";
export { Pages };
