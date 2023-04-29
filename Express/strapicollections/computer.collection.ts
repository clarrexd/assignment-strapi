import axios, { AxiosResponse } from "axios";
import {
  IComputer,
  ICreatedComputer,
  IUpdateComputer,
} from "../src/models/IComputer";

const api = axios.create({
  baseURL: "http://localhost:1337/api",
});

export const getAll = async (): Promise<IComputer[]> => {
  const response = await api.get(`/computers`);
  return response.data;
};

export const getById = async (id: number): Promise<IComputer> => {
  const response: AxiosResponse<IComputer> = await api.get(`/computers/${id}`);
  return response.data;
};

export const deleteById = async (id: number): Promise<IComputer> => {
  const response: AxiosResponse<IComputer> = await api.delete(
    `/computers/${id}`
  );
  return response.data;
};

export const create = async (
  data: ICreatedComputer
): Promise<ICreatedComputer> => {
  return api.post(`/computers`, data);
};

export const update = async (id: number, data: IUpdateComputer) => {
  return api.put(`/computers/${id}`, data);
};
