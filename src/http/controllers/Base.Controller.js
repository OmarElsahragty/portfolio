import LocaleKeys from "../../core/locales";
import Errors from "../errors";

class BaseController {
  async exec(next, fn, ...params) {
    const { err, data } = await fn(...params);
    if (err) {
      if (err.isAppError) {
        next(Errors.http.badRequest(err.error));
        return null;
      } else {
        next(err.error);
        return null;
      }
    }
    return data;
  }

  okRes(req, res, data, statusCode = 200) {
    return res.status(statusCode).json({
      message: req.t(LocaleKeys.SUCCESS),
      data,
    });
  }
}

export default BaseController;
