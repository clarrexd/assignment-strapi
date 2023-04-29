import axios, { AxiosResponse } from "axios";
import { IMobile, ICreatedMobile, IUpdateMobile } from "../src/models/IMobile";

const api = axios.create({
  baseURL: "http://localhost:1337/api",
});

export const getAll = async (): Promise<IMobile[]> => {
  const response = await api.get(`/mobile-devices`);
  return response.data;
};

export const getById = async (id: number): Promise<IMobile> => {
  const response: AxiosResponse<IMobile> = await api.get(
    `/mobile-devices/${id}`
  );
  return response.data;
};

export const deleteById = async (id: number): Promise<IMobile> => {
  const response: AxiosResponse<IMobile> = await api.delete(
    `/mobile-devices/${id}`
  );
  return response.data;
};

export const create = async (data: ICreatedMobile): Promise<ICreatedMobile> => {
  return api.post(`/mobile-devices`, data);
};

export const update = async (id: number, data: IUpdateMobile) => {
  return api.put(`/mobile-devices/${id}`, data);
};
