import { body, validationResult } from "express-validator";
import { Router } from "express";
const router = Router();

import { authJwt } from '../middleware'
import * as userServices from "../services/secretaria/secretaria";

router.get("/secretaria", userServices.getSecretaria);
// router.post("/findClient", clientsServices.findClient);
// router.put("/updateClient", clientsServices.updateClient);
// router.delete("/deleteClient", clientsServices.deleteClient);

export default router;