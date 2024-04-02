import { body, validationResult } from "express-validator";
import { Router } from "express";
const router = Router();

import { authJwt } from '../middleware'
import * as mapServices from "../services/coordenadas/coordenadas.service";


router.post("/getCoordenadas", authJwt.verifyToken, 
    body('usuario').exists(),
    mapServices.getCoordenadas);    

router.post("/addCoordenadas", authJwt.verifyToken, 
    body('usuario').exists(),
    body('coordenadas').exists(),
    mapServices.addCoordenadas);  


export default router;