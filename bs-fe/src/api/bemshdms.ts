import axios from "axios";
import { Building, Unit } from "store/types";

const token = process.env.REACT_APP_ADMIN_REQUEST_KEY;
const baseURL = process.env.REACT_APP_BACK_END_API_SERVER;
const client = axios.create({
  baseURL,
});
const basePath = "/info";

export const getUnit = async (unitId: string | number) =>
  (
    await client.get<{ target: Unit }>(`${basePath}/sensor/${unitId}`, {
      headers: {
        authorization: token,
        "response-encrypt": "plain",
      },
    })
  ).data;
export const getBuilding = async (buildingId: string | number) =>
  (
    await client.get<{ target: Building }>(`${basePath}/unit/${buildingId}`, {
      headers: {
        authorization: token,
        "response-encrypt": "plain",
      },
    })
  ).data;
