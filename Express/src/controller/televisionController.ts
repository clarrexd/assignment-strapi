import { Request, Response } from "express";
import * as data from "../../strapicollections/television.collection";

export const getAllTelevisions = async (req: Request, res: Response) => {
  try {
    const televisions = await data.getAll();
    return res.status(200).json({ data: televisions });
  } catch (e) {
    return res.status(500).json({ message: "could not load televisions" });
  }
};

export const getTelevisionById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const foundTelevision = await data.getById(id);
    if (!foundTelevision) {
      return res.status(404).json({ message: `television was not found` });
    } else {
      res.status(200).json(foundTelevision);
    }
  } catch (e) {
    return res
      .status(500)
      .json({ message: ` could not find a television with id ${id}` });
  }
};

export const createTelevision = async (req: Request, res: Response) => {
  const newTelevision = req.body;

  try {
    const record = await data.create({ data: newTelevision });

    if (record.data.name) {
      res.status(409).json({
        message: `A television with name ${record.data.name} already exists`,
      });
    } else {
      res.status(201).json({ message: `added a new television` });
    }
  } catch (e) {
    res.status(500).json({ message: `could not add a new television` });
  }
};

export const deletedTelevisionById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const foundTelevision = await data.getById(id);
    if (!foundTelevision) {
      return res.status(404).json({ message: `Television not found` });
    } else {
      const deletedRecord = await data.deleteById(id);
      return res.status(200).json({
        record: deletedRecord,
        message: `deleted television with id ${id}`,
      });
    }
  } catch (e) {
    return res
      .status(500)
      .json({ message: `could not delete a television with id ${id}` });
  }
};

export const updateTelevision = async (req: Request, res: Response) => {
  const updateObj = req.body;
  const id = Number(req.params.id);
  try {
    const foundRecord = await data.getById(id);

    if (!foundRecord) {
      return res
        .status(404)
        .json({ message: `Television with ${id} not found` });
    } else {
      const record = await data.create({ data: updateObj });

      res.status(200).json({
        record: record.data,
        message: `updated television with ${id}`,
      });
    }
  } catch (e) {
    res.status(500).json({ message: `could not update television with ${id}` });
  }
};
