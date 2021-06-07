import Dotenv from "dotenv";

Dotenv.config();

export default {
  Port: process.env.PORT * 1,

  SentryDNS: process.env.SENTRY_DNS,

  SMTP: {
    Host: process.env.SMTP_HOST,
    User: process.env.SMTP_USER,
    Password: process.env.SMTP_PASSWORD,
  },
};
