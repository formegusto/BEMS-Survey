import { MainComponent, Policy } from "@components";
import React from "react";
import { useNavigate } from "react-router-dom";

function MainContainer() {
  const navigate = useNavigate();
  const [showPolicy, setShowPolicy] = React.useState<boolean>(false);
  const [isAgree, setIsAgree] = React.useState<boolean>(false);

  const onStart = React.useCallback(() => {
    if (isAgree) {
      navigate("/basic");
    } else {
      setShowPolicy(true);
    }
  }, [navigate, isAgree]);

  const onAgree = React.useCallback(() => {
    setIsAgree(true);
    setShowPolicy(false);
    navigate("/basic");
  }, [navigate]);

  const onNotAgree = React.useCallback(() => {
    setIsAgree(false);
    setShowPolicy(false);
  }, []);

  return (
    <>
      <MainComponent onStart={onStart} />
      {showPolicy && <Policy onAgree={onAgree} onNotAgree={onNotAgree} />}
    </>
  );
}

export { MainContainer };
