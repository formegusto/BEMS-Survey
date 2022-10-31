import { BasicComponent } from "@components";
import { useBasic } from "@hooks";
import { FBasicInfo } from "@store/types";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function BasicContainer() {
  const navigate = useNavigate();

  const { register, handleSubmit, setValue } = useForm<FBasicInfo>({});
  const [token, postBasic, tokenCheck] = useBasic();

  const onSubmit: SubmitHandler<FBasicInfo> = React.useCallback(
    (data) => {
      postBasic(data);
    },
    [postBasic]
  );

  return (
    <BasicComponent
      register={register}
      onSubmit={handleSubmit(onSubmit)}
      setValue={setValue}
    />
  );
}

export { BasicContainer };
