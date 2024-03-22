import { z } from "zod";
import { User } from "../user/type";
import { Comment } from "../comment/type";

// const MAX_MB = 5;
// const MAX_UPLOAD_SIZE = 1920 * 1920 * MAX_MB;
// const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const createPostSchema = z.object({
  conten: z.string().min(1, { message: "Please type a caption" }),
  picture: z
    .any()
    // .refine(
    //   (file) => file.size <= MAX_UPLOAD_SIZE,
    //   `Max image size is ${MAX_MB}MB`
    // )
    // .refine(
    //   (file) =>
    // !file || file.type === "" || ACCEPTED_IMAGE_TYPES.includes(file.type),
    //   "Only .jpg, .jpeg, and .png formats are supported"
    // )
    .optional(),
});

export interface Posting {
  user_id: number;
  conten: string;
  picture: string;
  users: Pick<User, "nama" | "picture">;
  comments: Pick<Comment, "post_id">;
}

export type CreatePostSchema = z.infer<typeof createPostSchema>;
