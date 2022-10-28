import Express from "express";
import routes from "./routes";
import morgan from "morgan";
import cors from "cors";

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
  }

  SetRoutes() {
    this.app.use(routes);
  }

  Start() {
    const port = process.env.PORT ? parseInt(process.env.PORT) : 8000;

    this.app.listen(port, () => {
      console.log(`[Express : ${port}] Start! :)`);
    });
  }
}

export default new App().Start();
