import express from "express";
import { validate } from "../middlewares";
import { mailController } from "../controllers";

import { mailValidator } from "../../core/validators";

const router = express.Router();

router.post("/mail", validate(mailValidator), mailController.send);

export default router;
