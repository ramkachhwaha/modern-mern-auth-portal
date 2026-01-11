import express from 'express';
import { getUser } from "../contollers/user.controller.js"
import { authMiddlewareOnlyForUser } from '../middleware/auth.middleware.js';
const router = express.Router();

/* GET users listing. */
router.use("/", authMiddlewareOnlyForUser)
  .get('/me', getUser);

export default router;