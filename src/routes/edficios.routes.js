import { body, validationResult } from "express-validator";
import { Router } from "express";
const router = Router();

import { authJwt } from '../middleware'
import * as edificiosServices from "../services/edificios/edificios.service";

router.get("/getEdificios", authJwt.verifyToken, edificiosServices.getEdificios);
// router.post("/findClient", clientsServices.findClient);
// router.put("/updateClient", clientsServices.updateClient);
// router.post("/createUpdateClients", authJwt.verifyToken,
//     body('ubicacion').exists(),
//     body('nombre').exists(),
//     body('rif').exists(),
//     clientsServices.createUpdateClient);
// router.delete("/deleteClient", clientsServices.deleteClient);

export default router;