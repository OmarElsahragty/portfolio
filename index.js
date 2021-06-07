import { error, success } from "consola";
import * as Sentry from "@sentry/node";
import "@sentry/tracing";
import main from "./main";

console.success = (message) => {
  success({
    badge: true,
    message,
  });
};

console.error = (message) => {
  error({
    badge: true,
    message,
  });
};

Sentry.init({
  dsn: "https://77d00d9481ca410ab9aa57a61af68809@o783506.ingest.sentry.io/5805285",
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
