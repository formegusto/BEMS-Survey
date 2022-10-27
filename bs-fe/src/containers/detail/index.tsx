import { DetailComponent } from "@components";
import { FDetailInfo } from "@store/types";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

function DetailContainer() {
  const { register, handleSubmit, setValue } = useForm<FDetailInfo>({});

  const onSubmit: SubmitHandler<FDetailInfo> = React.useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <DetailComponent
      register={register}
      onSubmit={handleSubmit(onSubmit)}
      setValue={setValue}
    />
  );
}

export { DetailContainer };
