import * as yup from "yup";

const name = yup.string().required();

const email = yup.string().email().required();

const message = yup.string().required();

export const sendMail = yup.object().shape({ name, email, message });
