import * as yup from "yup";

const email = yup.string().email().required();

export const sendMail = yup.object().shape({
  email,
});
