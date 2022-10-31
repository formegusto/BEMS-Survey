import axios from "axios";

const baseURL = process.env.REACT_APP_BACK_END_SURVEY_API_SERVER;
export const surveyClient = axios.create({
  baseURL,
});
export * from "./basic";
export * from "./question";
