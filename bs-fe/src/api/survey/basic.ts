import { BasicInfo, FBasicInfo } from "@store/types";
import { surveyClient } from ".";

const basePATH = "/basic";

export const postBasic = async (basicInfo: FBasicInfo) =>
  (await surveyClient.post<{ token: string }>(`${basePATH}`, basicInfo)).data;

export const checkToken = async (token: string) =>
  (
    await surveyClient.get<BasicInfo>(`${basePATH}`, {
      headers: {
        authorization: token,
      },
    })
  ).data;
