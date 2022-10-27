import { DetailComponent } from "@components";
import { FDetailInfo } from "@store/types";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

function DetailContainer() {
  const { register, handleSubmit, setValue, watch } = useForm<FDetailInfo>({});

  const rank1Watch = watch("1rank");
  const rank2Watch = watch("2rank");

  const onSubmit: SubmitHandler<FDetailInfo> = React.useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <DetailComponent
      rank1Watch={rank1Watch}
      rank2Watch={rank2Watch}
      register={register}
      onSubmit={handleSubmit(onSubmit)}
      setValue={setValue}
    />
  );
}

export { DetailContainer };
