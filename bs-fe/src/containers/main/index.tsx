import { MainComponent, Policy } from "@components";
import { RootReducer, TargetStore } from "@store";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function MainContainer() {
  const navigate = useNavigate();
  const [showPolicy, setShowPolicy] = React.useState<boolean>(false);
  const [isAgree, setIsAgree] = React.useState<boolean>(false);

  const { building, unit } = useSelector<RootReducer, TargetStore>(
    ({ target }) => target
  );

  const onStart = React.useCallback(() => {
    if (isAgree) navigate("/basic");
    else setShowPolicy(true);
  }, [navigate, isAgree]);

  const onAgree = React.useCallback(() => {
    setIsAgree(true);
    navigate("/basic");
  }, [navigate]);

  const onNotAgree = React.useCallback(() => {
    setIsAgree(false);
    setShowPolicy(false);
  }, []);

  return (
    <div>
      <MainComponent onStart={onStart} building={building!} unit={unit!} />
      {showPolicy && <Policy onAgree={onAgree} onNotAgree={onNotAgree} />}
    </div>
  );
}

export { MainContainer };
