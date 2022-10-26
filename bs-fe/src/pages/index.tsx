import { useLocation, useRoutes } from "react-router-dom";
import BasicPage from "./basic";
import DetailPage from "./detail";
import MainPage from "./main";
import SuccessPage from "./success";
import { CSSTransition } from "react-transition-group";
import { PageTransition } from "./styles";
import React from "react";

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
    <PageTransition className="transition-wrap">
      <CSSTransition key={location.pathname} classNames="trans" timeout={300}>
        {routes}
      </CSSTransition>
    </PageTransition>
  );
}

export * from "./Template";
export { Pages };
