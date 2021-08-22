import Dotenv from "dotenv";

Dotenv.config();

export default {
  Port: process.env.PORT * 1,

  SentryDNS: process.env.SENTRY_DNS,

  SMTP: {
    Host: process.env.SMTP_HOST,
    Port: process.env.SMTP_PORT * 1,
    Secure: JSON.parse(process.env.SMTP_SECURE),
    User: process.env.SMTP_USER,
    Password: process.env.SMTP_PASSWORD,
  },
};
