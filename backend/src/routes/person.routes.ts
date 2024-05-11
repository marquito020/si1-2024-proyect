import { Router } from "express";
import personController from "../controllers/person.controller";

const router = Router();

router.get("/", personController.getPersons);
router.get("/:id", personController.getPersonById);
router.post("/", personController.createPerson);
router.put("/:id", personController.updatePerson);
router.delete("/:id", personController.deletePerson);

export default router;
