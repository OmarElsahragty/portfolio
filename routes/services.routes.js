const { validation } = require("../middlewares");
const { mail } = require("../services");

module.exports = (app) => {
  app.post("/services/mail", [validation.checkEmail], mail.sendEmail);
};
