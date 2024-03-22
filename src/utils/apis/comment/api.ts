import { ApiDataResponse, ApiResponse } from "@/utils/types/api";
import axiosWithConfig from "../axiosWithConfig";
import { Comment, CommentSchema, UpdateCommentType } from "./type";

export const addComment = async (data: CommentSchema) => {
  try {
    const response = await axiosWithConfig.post(`/comments`, data);
    return response.data as ApiDataResponse<Comment>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const updateComment = async (
  commentId: number,
  data: UpdateCommentType
) => {
  try {
    const response = await axiosWithConfig.put(`/comment${commentId}`, data);
    return response.data as ApiDataResponse<Comment>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const deleteComment = async (commentId: number) => {
  try {
    const response = await axiosWithConfig.delete(`/comment${commentId}`);
    return response.data as ApiResponse;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
