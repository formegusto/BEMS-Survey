import { checkToken, postBasic } from "@api";
import { RootReducer, SurveyStore } from "@store";
import { initBasicInfo } from "@store/actions";
import { BasicInfo, FBasicInfo } from "@store/types";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export type ReturnTypes = [
  token: string | undefined,
  basicInfo: BasicInfo | undefined,
  postBasic: (basicInfo: FBasicInfo) => void,
  tokenCheck: (token: string) => void
];
export function useBasic(): ReturnTypes {
  const { basicInfo } = useSelector<RootReducer, SurveyStore>(
    ({ survey }) => survey
  );
  const dispatch = useDispatch();
  const [token, setToken] = React.useState<string>();

  const { mutate: tokenCheckMutate } = useMutation(["tokenCheck"], checkToken, {
    onSuccess: (data) => {
      dispatch(initBasicInfo(data));
    },
  });
  const { mutate: postBasicMutate } = useMutation(
    ["postBasicInfo"],
    postBasic,
    {
      onSuccess: ({ token }) => {
        setToken(token);
      },
    }
  );

  React.useEffect(() => {
    if (token) tokenCheckMutate(token);
  }, [token, tokenCheckMutate]);

  return [token, basicInfo, postBasicMutate, tokenCheckMutate];
}
