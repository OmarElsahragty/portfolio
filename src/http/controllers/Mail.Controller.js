import { sendMail } from "../../services";
import BaseController from "./Base.Controller";

class MailController extends BaseController {
  send = async (req, res, next) => {
    const data = await this.exec(next, sendMail(req.body));
    if (data) return this.okRes(req, res, data);
  };
}

export default new MailController();
