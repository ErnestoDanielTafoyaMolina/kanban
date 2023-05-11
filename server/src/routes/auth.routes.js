import { Router } from "express";
const router = Router();
import {prueba} from '../api/httpActionLayer/authHttp'


router.post("/login2",prueba);


export default router;