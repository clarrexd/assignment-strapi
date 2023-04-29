import express from "express";
import * as controller from "../controller/computerController";

export const computerRoutes = express.Router();

computerRoutes.get("/", controller.getAllComputers);

computerRoutes.get("/:id", controller.getComputerById);

computerRoutes.delete("/:id", controller.deletedComputerById);

computerRoutes.post("/", controller.createComputer);

computerRoutes.put("/:id", controller.updateComputer);
