import { body, validationResult } from "express-validator";
import { Router } from "express";
const router = Router();

import { authJwt } from '../middleware'
import * as clientsServices from "../services/clientes/clientes.service";

router.get("/getPatriotas",  clientsServices.getClients);
// router.post("/findClient", clientsServices.findClient);
// router.put("/updateClient", clientsServices.updateClient);
router.post("/createUpdateClients", authJwt.verifyToken,
    clientsServices.createUpdateClient);
// router.delete("/deleteClient", clientsServices.deleteClient);

export default router;