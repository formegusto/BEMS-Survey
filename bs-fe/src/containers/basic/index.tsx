import { BasicComponent } from "@components";
import { FBasicInfo } from "@store/types";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function BasicContainer() {
  const navigate = useNavigate();

  const { register, handleSubmit, setValue } = useForm<FBasicInfo>({});
  const onSubmit: SubmitHandler<FBasicInfo> = React.useCallback(
    (data) => {
      console.log(data);
      navigate("/detail");
    },
    [navigate]
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
