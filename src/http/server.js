import http from "http";
import path from "path";
import express from "express";
import { success } from "consola";
import { I18next, ErrorHandler } from "./middlewares";
import { mailRoutes } from "./routes";

class Server {
  constructor(port) {
    this.port = port;
    this.app = express();
    this.server = http.createServer(this.app);
    this.setup();
  }

  setup() {
    this.app.use(express.json()).disable("x-powered-by").use(I18next);

    this.app.use("/services", mailRoutes);

    this.app.use(
      "/",
      express.static(path.join(__dirname, "../../client/build"))
    );
    this.app.get("*", (_, res) => {
      res.sendFile(path.join(__dirname, "../../client/build", "index.html"));
    });

    this.app.use(ErrorHandler);
  }

  start() {
    this.server.listen(this.port, () => {
      success({
        badge: true,
        message: `Server has started on port: ${this.port}`,
      });
    });
  }
}

export default Server;
