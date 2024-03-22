import { z } from "zod";

export const commentSchema = z.object({
  post_id: z.number().min(1, { message: "" }),
  conten: z.string().min(1, { message: "Your comment is null" }),
});

export const updateCommentType = z.object({
  post_id: z.number().min(1, { message: "" }),
  conten: z.string().min(1, { message: "Your comment is null" }),
});

export interface Comment {
  post_id: number;
  conten: string;
  comment: string;
  pemilik: string;
}

export type UpdateCommentType = z.infer<typeof updateCommentType>;
export type CommentSchema = z.infer<typeof commentSchema>;
