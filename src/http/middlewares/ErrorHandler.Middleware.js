import AppErrors from "../errors";

const formatError = (messages, req) => {
  return messages.map((msg) => req.t(msg)).join(" & ");
};

// eslint-disable-next-line no-unused-vars
export default function errorHandler(err, req, res, _) {
  const handledError = AppErrors.errorHandler(err);

  return res.status(handledError.statusCode).send({
    error: {
      ...handledError,
      message:
        typeof handledError.message === "string"
          ? req.t(handledError.message)
          : formatError(handledError.message, req),
    },
  });
}
