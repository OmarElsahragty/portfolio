import boom from "boom";
import { SERVER_ERROR } from "./constants";

class BoomHttpErrors {
  notFound(message) {
    return boom.notFound(message);
  }

  unauthorized(message) {
    return boom.unauthorized(message);
  }

  badData(message) {
    return boom.badData(message);
  }

  badRequest(message) {
    return boom.badRequest(message);
  }

  isHttpError(err) {
    return boom.isBoom(err);
  }

  handleError(err) {
    if (err.isServer) {
      console.error({ SERVER_ERROR: err });
      return SERVER_ERROR;
    } else return err.output.payload;
  }
}

export default BoomHttpErrors;
