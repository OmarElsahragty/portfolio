export default function validate(schema) {
  return (req, res, next) => {
    try {
      const validatedData = schema.validateSync(req.body, {
        abortEarly: false,
        strict: false,
        stripUnknown: true,
      });
      req.body = validatedData;
      next();
    } catch (err) {
      return res.status(400).json({ message: err.errors });
    }
  };
}
