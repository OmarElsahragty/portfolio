import BoomHttpErrors from "./Boom.Errors";
import { SERVER_ERROR } from "./constants";

class AppErrors {
  constructor() {
    this.http = new BoomHttpErrors();
  }

  __handleHttpError(err) {
    if (err.isServer) {
      console.error("❌ ", { SERVER_ERROR: err });
      return SERVER_ERROR;
    } else return err.output.payload;
  }

  __handleUnknownError(err) {
    console.error("❌ ", { UNKNOWN_ERROR: err });
    return SERVER_ERROR;
  }

  errorHandler(err) {
    if (this.http.isHttpError(err)) return this.http.handleError(err);
    return this.__handleUnknownError(err);
  }
}

export default new AppErrors();
