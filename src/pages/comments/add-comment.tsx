import { CustomFormField } from "@/components/custom-formfield";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addComment } from "@/utils/apis/comment/api";
import { CommentSchema, commentSchema } from "@/utils/apis/comment/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AddComment = () => {
  const navigate = useNavigate();

  const form = useForm<CommentSchema>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      //   post_id: 0,
      conten: "",
    },
  });

  async function onSubmit(data: CommentSchema) {
    try {
      const result = await addComment(data);

      toast(result.message);
      navigate("/");
    } catch (error) {
      toast((error as Error).message.toString());
    }
  }

  return (
    <Form {...form}>
      <form action="" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col w-full px-8 py-4">
          <div className="flex mx-2 my-2">
            <div className="flex-none">
              <Avatar className="w-10 h-10">
                <AvatarImage src={"https://github.com/shadcn.png"} />
              </Avatar>
            </div>
            <div className="grow mx-4 my-auto">
              <CustomFormField control={form.control} name="conten">
                {(field) => (
                  <Input
                    {...field}
                    placeholder="Add a comment"
                    disabled={form.formState.isSubmitting}
                    aria-disabled={form.formState.isSubmitting}
                    value={field.value as string}
                  />
                )}
              </CustomFormField>
            </div>
            <div className="flex-none">
              <Button type="submit" className=" space-x-2">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default AddComment;
