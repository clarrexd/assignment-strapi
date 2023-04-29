import express from "express";
import * as controller from "../controller/mobileController";

export const mobileRoutes = express.Router();

mobileRoutes.get("/", controller.getAllMobiles);

mobileRoutes.get("/:id", controller.getMobileById);

mobileRoutes.delete("/:id", controller.deletedMobileById);

mobileRoutes.post("/", controller.createMobile);

mobileRoutes.put("/:id", controller.updateMobile);
