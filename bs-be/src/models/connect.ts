import dotenv from "dotenv";
import { connect } from "mongoose";

export async function mongoConnect() {
  dotenv.config();
  const { MONGO_HOST, MONGO_PORT, MONGO_APP } = process.env;
  const mongoUrl = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_APP}`;

  try {
    await connect(mongoUrl);
    console.log("[mongoose] connected :)");
  } catch (err) {
    console.log("[mongoose] connect Error :(");
    console.error(err);
  }
}
