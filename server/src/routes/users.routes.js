import { Router } from "express";
const router = Router();

import { handleLogin,handeLogOut } from "../controllers/users.controllers";

router.post("/login",handleLogin);
router.post("/logout", handeLogOut);


export default router;