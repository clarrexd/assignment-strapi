import { Request, Response } from "express";
import * as data from "../../strapicollections/mobile.collection";

export const getAllMobiles = async (req: Request, res: Response) => {
  try {
    const mobiles = await data.getAll();
    return res.status(200).json({ data: mobiles });
  } catch (e) {
    return res.status(500).json({ message: "could not load mobiles" });
  }
};

export const getMobileById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const foundMobile = await data.getById(id);
    if (!foundMobile) {
      return res.status(404).json({ message: `mobile was not found` });
    } else {
      res.status(200).json(foundMobile);
    }
  } catch (e) {
    return res
      .status(500)
      .json({ message: ` could not find mobile with id ${id} ` });
  }
};

export const createMobile = async (req: Request, res: Response) => {
  const newMobile = req.body;

  try {
    const record = await data.create({ data: newMobile });

    if (record.data.name) {
      res.status(409).json({
        message: ` mobile with name ${record.data.name} already exists `,
      });
    } else {
      res.status(201).json({ message: `added a new mobile` });
    }
  } catch (e) {
    res.status(500).json({ message: ` could not add a new mobile` });
  }
};

export const deletedMobileById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const foundMobile = await data.getById(id);
    if (!foundMobile) {
      return res.status(404).json({ message: `mobile not found` });
    } else {
      const deletedRecord = await data.deleteById(id);
      return res.status(200).json({
        record: deletedRecord,
        message: `deleted mobile with id ${id}`,
      });
    }
  } catch (e) {
    return res
      .status(500)
      .json({ message: ` could not delete mobile with id ${id}` });
  }
};

export const updateMobile = async (req: Request, res: Response) => {
  const updateObj = req.body;
  const id = Number(req.params.id);

  try {
    const foundRecord = await data.getById(id);

    if (!foundRecord) {
      return res.status(404).json({ message: `mobile with ${id} not found` });
    } else {
      const record = await data.update(id, { data: updateObj });

      res
        .status(200)
        .json({ record: record.data, message: `updated mobile with ${id}` });
    }
  } catch (e) {
    res.status(500).json({ message: `could not update mobile with ${id}` });
  }
};
