import { ApiDataResponse, ApiResponse } from "@/utils/types/api";
import axiosWithConfig from "../axiosWithConfig";
import { LoginSchema, ProfileUpdateType, RegisterSchema, User } from "./type";

interface LoginPayload {
  token: string;
}

export const registerUser = async (data: RegisterSchema) => {
  try {
    const response = await axiosWithConfig.post(`/users`, data);
    return response.data as ApiDataResponse<User>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const loginUser = async (data: LoginSchema) => {
  try {
    const response = await axiosWithConfig.post(`/login`, data);
    return response.data as ApiDataResponse<LoginPayload>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const getUserProfile = async () => {
  try {
    const response = await axiosWithConfig.get(`/users`);
    return response.data as ApiDataResponse<User>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const updateUserProfile = async (data: ProfileUpdateType) => {
  try {
    const response = await axiosWithConfig.put(`/users/${data.email}`, data);
    return response.data as ApiDataResponse<User>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const deleteUser = async (email: string) => {
  try {
    const response = await axiosWithConfig.delete(`/users/${email}`);
    return response.data as ApiResponse;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
