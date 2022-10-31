import { BasicComponent } from "@components";
import { useBasic } from "@hooks";
import { FBasicInfo } from "@store/types";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function BasicContainer() {
  const navigate = useNavigate();

  const { register, handleSubmit, setValue } = useForm<FBasicInfo>({});
  const [token, basicInfo, postBasic] = useBasic();

  const onSubmit: SubmitHandler<FBasicInfo> = React.useCallback(
    (data) => {
      postBasic(data);
    },
    [postBasic]
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
