import { IQuestion } from "@store/types";
import { surveyClient } from ".";

const basePATH = "/question";
export const getQuestion = async () =>
  (
    await surveyClient.get<IQuestion[]>(`${basePATH}`, {
      headers: {
        authorization: localStorage.getItem("token")!,
      },
    })
  ).data;

export const getQuestionTypes = async () =>
  (
    await surveyClient.get<string[]>(`${basePATH}/type`, {
      headers: {
        authorization: localStorage.getItem("token")!,
      },
    })
  ).data;
