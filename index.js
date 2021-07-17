import * as Sentry from "@sentry/node";
import "@sentry/tracing";
import Config from "./src/config";
import main from "./main";

/* eslint-disable no-console */

console.success = (message) => console.log("✔️ ", message);

console.error = (message) => {
  console.log("❌ ", message);
  console.trace();
};

Sentry.init({
  dsn: Config.SentryDNS,
  tracesSampleRate: 1.0,
});

const transaction = Sentry.startTransaction({
  op: "Nodejs Backend",
  name: "Sahragty's Portfolio",
});

setTimeout(() => {
  try {
    main();
  } catch (e) {
    Sentry.captureException(e);
  } finally {
    transaction.finish();
  }
}, 99);
