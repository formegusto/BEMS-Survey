import Express from "express";
import routes from "@routes";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import { mongoConnect } from "@models";
import { errorHandler } from "@routes/error";

class App {
  app: Express.Application;

  constructor() {
    this.app = Express();

    this.SetMW();
    this.SetRoutes();
  }

  SetMW() {
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(Express.json());
  }

  SetRoutes() {
    this.app.use(routes);
    this.app.use(errorHandler);
  }

  Start() {
    dotenv.config();
    const port = process.env.PORT ? parseInt(process.env.PORT) : 8000;

    this.app.listen(port, async () => {
      console.log(`[Express : ${port}] Start! :)`);
      await mongoConnect();
    });
  }
}

export default new App().Start();
