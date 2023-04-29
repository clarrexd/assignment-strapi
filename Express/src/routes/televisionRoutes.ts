import express from "express";
import * as controller from "../controller/televisionController";

export const televisionRoutes = express.Router();

televisionRoutes.get("/", controller.getAllTelevisions);

televisionRoutes.get("/:id", controller.getTelevisionById);

televisionRoutes.delete("/:id", controller.deletedTelevisionById);

televisionRoutes.post("/", controller.createTelevision);

televisionRoutes.put("/:id", controller.updateTelevision);
