import { body, validationResult } from "express-validator";
import { Router } from "express";
const router = Router();

import { authJwt } from '../middleware'
import * as dotacionesServices from "../services/dotaciones/dotaciones.services";

router.post("/addDotaciones", authJwt.verifyToken, 
    body('usuario').exists(),
    body('shirt').exists(),
    body('shoes').exists(),
    body('pants').exists(),
    dotacionesServices.addDotaciones);  



export default router;