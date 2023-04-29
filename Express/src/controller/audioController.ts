import { Request, Response } from "express";
import * as data from "../../strapicollections/audio.collection";

export const getAllAudios = async (req: Request, res: Response) => {
  try {
    const audios = await data.getAll();
    return res
      .status(200)
      .json({ message: "here you have audios!", data: audios });
  } catch (e) {
    return res
      .status(500)
      .json({ message: "could not load any audio devices" });
  }
};

export const getAudioById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const foundAudio = await data.getById(id);
    if (!foundAudio) {
      return res.status(404).json({ message: `no audio devices found` });
    } else {
      res.status(200).json(foundAudio);
    }
  } catch (e) {
    return res
      .status(500)
      .json({ message: ` failed to find any audio devices with id ${id} ` });
  }
};

export const createAudio = async (req: Request, res: Response) => {
  const newAudio = req.body;

  try {
    const record = await data.create({ data: newAudio });

    if (record.data.name) {
      res.status(409).json({
        message: `an audio device with name ${record.data.name} already exists`,
      });
    } else {
      res.status(201).json({ message: `added a new audio device` });
    }
  } catch (e) {
    res.status(500).json({ message: ` failed to add a new audio device` });
  }
};

export const deletedAudioById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const foundAudio = await data.getById(id);
    if (!foundAudio) {
      return res.status(404).json({ message: `audio was not found` });
    } else {
      const deletedRecord = await data.deleteById(id);
      return res.status(200).json({
        record: deletedRecord,
        message: `deleted audio with id ${id}`,
      });
    }
  } catch (e) {
    return res
      .status(500)
      .json({ message: `failed to delete audio with id ${id}` });
  }
};

export const updateAudio = async (req: Request, res: Response) => {
  const updateObj = req.body;
  const id = Number(req.params.id);

  try {
    const foundRecord = await data.getById(id);

    if (!foundRecord) {
      return res
        .status(404)
        .json({ message: `an audio with ${id} was not found` });
    } else {
      const record = await data.create({ data: updateObj });

      res
        .status(200)
        .json({ record: record.data, message: `updated audio with ${id}` });
    }
  } catch (e) {
    res.status(500).json({ message: `failed to update audio with ${id}` });
  }
};
