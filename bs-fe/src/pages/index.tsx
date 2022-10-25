import { useRoutes } from "react-router-dom";
import BasicPage from "./basic";
import DetailPage from "./detail";
import MainPage from "./main";
import SuccessPage from "./success";

function Pages() {
  const routes = useRoutes([
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
  ]);

  return routes;
}

export default Pages;
