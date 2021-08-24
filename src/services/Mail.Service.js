import nodemailer from "nodemailer";
import LocaleKeys from "../core/locales";
import { Protocols } from "../core/helpers";
import Config from "../config";

export async function sendMail(data) {
  const transporter = nodemailer.createTransport({
    service: Config.SMTP.Service,
    auth: {
      user: Config.SMTP.User,
      pass: Config.SMTP.Password,
    },
  });

  try {
    await transporter.sendMail(data);
    return Protocols.appResponse({ data: null });
  } catch (error) {
    console.error(`❌ SENDING MAIL ERROR : ${error}`);
    return Protocols.appResponse({ err: LocaleKeys.SEND_EMAIL_ERROR });
  }
}

export default ({ name, email, message }) =>
  sendMail({
    from: Config.SMTP.User,
    to: Config.App.Mail,
    subject: Config.App.MailSubject,
    text: `
    from: ${name}
    
    contact: ${email}
    
    message: ${message}`,
  });
