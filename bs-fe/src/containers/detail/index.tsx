import { getQuestion, getQuestionTypes, postDetail } from "@api";
import { DetailComponent } from "@components";
import { FDetailInfo } from "@store/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function DetailContainer() {
  const navigate = useNavigate();
  const { data, isSuccess } = useQuery(["getQuestions"], getQuestion);
  const { mutate: postDetailMutate } = useMutation(["postDetail"], postDetail, {
    onSuccess: () => {
      navigate("/success");
    },
  });

  const { data: types, isSuccess: isTypeSuccess } = useQuery(
    ["getQuestionTypes"],
    getQuestionTypes
  );
  const { register, handleSubmit, setValue, watch } = useForm<FDetailInfo>({});

  const rank1Watch = watch("1rank");
  const rank2Watch = watch("2rank");

  const onSubmit: SubmitHandler<FDetailInfo> = React.useCallback(
    (data) => {
      postDetailMutate(data);
    },
    [postDetailMutate]
  );

  return isTypeSuccess && isSuccess ? (
    <DetailComponent
      data={data}
      types={types}
      rank1Watch={rank1Watch}
      rank2Watch={rank2Watch}
      register={register}
      onSubmit={handleSubmit(onSubmit)}
      setValue={setValue}
    />
  ) : (
    <></>
  );
}

export { DetailContainer };
