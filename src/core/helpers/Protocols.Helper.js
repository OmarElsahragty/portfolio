export const appResponse = ({ err, data }) => {
  if (err) {
    return {
      err: {
        isAppError: typeof err === "string",
        error: err,
      },
      data: undefined,
    };
  }
  return { err, data };
};
