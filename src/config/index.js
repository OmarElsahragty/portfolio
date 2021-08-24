import Dotenv from "dotenv";

Dotenv.config();

export default {
  Port: process.env.PORT * 1,

  SentryDNS: process.env.SENTRY_DNS,

  SMTP: {
    Service: process.env.SMTP_SERVICE,
    User: process.env.SMTP_USER,
    Password: process.env.SMTP_PASSWORD,
  },

  App: {
    Mail: process.env.APP_MAIL,
    MailSubject: process.env.APP_MAIL_SUBJECT,
  },
};
