import { ApiDataResponse, ApiResponse } from "@/utils/types/api";
import axiosWithConfig from "../axiosWithConfig";
import { CreatePostSchema, Posting } from "./type";

export const createPost = async (data: CreatePostSchema) => {
  try {
    const response = await axiosWithConfig.post(`/post`, data);
    return response.data as ApiDataResponse<Posting>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const getPosts = async () => {
  try {
    const response = await axiosWithConfig.get(`/post`);
    return response.data as ApiDataResponse<Posting[]>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const getPostDetails = async (post_id: string) => {
  try {
    const response = await axiosWithConfig.get(`/posts/${post_id}`);
    return response.data as ApiDataResponse<Posting[]>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const updatePost = async (post_id: number, data: Posting) => {
  try {
    const response = await axiosWithConfig.put(`/post/${post_id}`, data);
    return response.data as ApiDataResponse<Posting>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const deletePost = async (post_id: number) => {
  try {
    const response = await axiosWithConfig.put(`/post/${post_id}`);
    return response.data as ApiResponse;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
