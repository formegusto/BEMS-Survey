import { useTarget } from "@hooks";
import { Pages, Template } from "@pages";
import React from "react";

function App() {
  const [show, setShow] = React.useState<boolean>(false);
  const [isSetting, isAvailable] = useTarget();

  React.useEffect(() => {
    if (isSetting) {
      if (isAvailable) setShow(true);
      else {
        alert("잘못된 접근 입니다.");
        setShow(false);
      }
    }
  }, [isSetting, isAvailable]);

  return <Template>{show && <Pages />}</Template>;
}

export default App;
