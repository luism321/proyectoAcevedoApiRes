import { body, validationResult } from "express-validator";
import { Router } from "express";
const router = Router();

import { authJwt } from '../middleware'
import * as userServices from "../services/user1x10/user";

router.get("/getUser", userServices.getUser1x10);
// router.post("/findClient", clientsServices.findClient);
// router.put("/updateClient", clientsServices.updateClient);
// router.delete("/deleteClient", clientsServices.deleteClient);

export default router;