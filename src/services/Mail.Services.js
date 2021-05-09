import util from "util";
import nodemailer from "nodemailer";
import LocaleKeys from "../core/locales";
import { Protocols } from "../core/helpers";
import Config from "../config";

export const sendMail = ({ name, email, message }) => {
  const transporter = nodemailer.createTransport({
    host: Config.SMTP.Host,
    auth: {
      user: Config.SMTP.User,
      pass: Config.SMTP.Password,
    },
  });

  transporter.sendMail = util.promisify(transporter.sendMail);

  return transporter
    .sendMail({
      from: Config.SMTP.User,
      to: "omar_elsahragty@hotmail.com",
      subject: "Sahragty's Portfolio ✔",
      text: `
    from: ${name}
    
    contact: ${email}
    
    message: ${message}`,
    })
    .then(() => Protocols.appResponse({ data: null }))
    .catch(() => Protocols.appResponse({ err: LocaleKeys.SEND_EMAIL_ERROR }));
};
