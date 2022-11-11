import { BasicComponent } from "@components";
import { useBasic } from "@hooks";
import { RootReducer, TargetStore } from "@store";
import { FBasicInfo } from "@store/types";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function BasicContainer() {
  const navigate = useNavigate();

  const { register, handleSubmit, setValue } = useForm<FBasicInfo>({});
  const { building, unit } = useSelector<RootReducer, TargetStore>(
    ({ target }) => target
  );
  const [token, basicInfo, postBasic] = useBasic();

  const onSubmit: SubmitHandler<FBasicInfo> = React.useCallback(
    (data) => {
      if (building && unit)
        postBasic({ ...data, buildingId: building?.id, unitId: unit?.id });
    },
    [postBasic, building, unit]
  );

  React.useEffect(() => {
    if (basicInfo) navigate("/detail");
  }, [basicInfo, navigate]);

  React.useEffect(() => {
    if (token) localStorage.setItem("token", token);
  }, [token]);

  return (
    <BasicComponent
      register={register}
      onSubmit={handleSubmit(onSubmit)}
      setValue={setValue}
    />
  );
}

export { BasicContainer };
