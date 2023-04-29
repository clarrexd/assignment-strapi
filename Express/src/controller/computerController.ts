import { Request, Response } from "express";
import * as data from "../../strapicollections/computer.collection";

export const getAllComputers = async (req: Request, res: Response) => {
  try {
    const computers = await data.getAll();
    return res.status(200).json({ data: computers });
  } catch (e) {
    return res.status(500).json({ message: "cannot load computers" });
  }
};

export const getComputerById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const foundComputer = await data.getById(id);
    if (!foundComputer) {
      return res.status(404).json({ message: `computer not found` });
    } else {
      res.status(200).json(foundComputer);
    }
  } catch (e) {
    return res
      .status(500)
      .json({ message: ` could not find computer with id ${id} ` });
  }
};

export const createComputer = async (req: Request, res: Response) => {
  const newComputer = req.body;

  try {
    const record = await data.create({ data: newComputer });

    if (record.data.name) {
      res.status(409).json({
        message: ` computer  with name ${record.data.name}already exists`,
      });
    } else {
      res.status(201).json({ message: `added a new computer` });
    }
  } catch (e) {
    res.status(500).json({ message: ` could not add a new computer` });
  }
};

export const deletedComputerById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const foundComputer = await data.getById(id);
    if (!foundComputer) {
      return res.status(404).json({ message: `computer not found` });
    } else {
      const deletedRecord = await data.deleteById(id);
      return res.status(200).json({
        record: deletedRecord,
        message: `deleted computer with id ${id}`,
      });
    }
  } catch (e) {
    return res
      .status(500)
      .json({ message: ` could not delete computer with id ${id} ` });
  }
};

export const updateComputer = async (req: Request, res: Response) => {
  const updateObj = req.body;
  const id = Number(req.params.id);

  try {
    const foundRecord = await data.getById(id);

    if (!foundRecord) {
      return res
        .status(404)
        .json({ message: `computer  with ${id} not found` });
    } else {
      const record = await data.create({ data: updateObj });

      res.status(200).json({
        record: record.data,
        message: `updated  computer computer with ${id}`,
      });
    }
  } catch (e) {
    res.status(500).json({ message: ` could not update computer with ${id}` });
  }
};
