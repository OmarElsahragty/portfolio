import LocaleKeys from "../../core/locales";
import Errors from "../errors";

class BaseController {
  async exec(next, fn, ...params) {
    const { err, data } = await fn(...params);
    if (err) {
      if (err.isAppError) {
        next(Errors.http.badRequest(err.error));
        return undefined;
      } else {
        next(err.error);
        return undefined;
      }
    }
    return data;
  }

  okRes(req, res, data, statusCode = 200) {
    if (data) {
      return res.status(statusCode).json({
        message: req.t(LocaleKeys.SUCCESS),
        data,
      });
    } else {
      return res.status(statusCode).json({
        message: req.t(LocaleKeys.SUCCESS),
      });
    }
  }
}

export default BaseController;
