import axios, { AxiosResponse } from "axios";
import {
  ITelevision,
  ICreatedTelevision,
  IUpdateTelevision,
} from "../src/models/ITelevision";

const api = axios.create({
  baseURL: "http://localhost:1337/api",
});

export const getAll = async (): Promise<ITelevision[]> => {
  const response = await api.get(`/televisions`);
  return response.data;
};

export const getById = async (id: number): Promise<ITelevision> => {
  const response: AxiosResponse<ITelevision> = await api.get(
    `/televisions/${id}`
  );
  return response.data;
};

export const deleteById = async (id: number): Promise<ITelevision> => {
  const response: AxiosResponse<ITelevision> = await api.delete(
    `/televisions/${id}`
  );
  return response.data;
};

export const create = async (
  data: ICreatedTelevision
): Promise<ICreatedTelevision> => {
  return api.post(`/televisions`, data);
};

export const update = async (id: number, data: IUpdateTelevision) => {
  return api.put(`/televisions/${id}`, data);
};
