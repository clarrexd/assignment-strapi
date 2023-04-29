import express from "express";
import * as controller from "../controller/audioController";

export const audioRoutes = express.Router();

audioRoutes.get("/", controller.getAllAudios);

audioRoutes.get("/:id", controller.getAudioById);

audioRoutes.delete("/:id", controller.deletedAudioById);

audioRoutes.post("/", controller.createAudio);

audioRoutes.put("/:id", controller.updateAudio);
