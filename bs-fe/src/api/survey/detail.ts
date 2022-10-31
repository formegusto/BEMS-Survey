import { FDetailInfo } from "@store/types";
import { surveyClient } from ".";

const basePATH = "/detail";

export const postDetail = async (detailInfo: FDetailInfo) =>
  (
    await surveyClient.post(`${basePATH}`, detailInfo, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    })
  ).data;
