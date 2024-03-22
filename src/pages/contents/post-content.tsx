import { CustomFormField } from "@/components/custom-formfield";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createPost } from "@/utils/apis/post/api";
import { CreatePostSchema, createPostSchema } from "@/utils/apis/post/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { Image, SendHorizontal } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface Props {
  profile_image: string;
}

const PostContentBar = (props: Props) => {
  const { profile_image } = props;
  const navigate = useNavigate();

  const form = useForm<CreatePostSchema>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      conten: "",
      picture: "",
    },
  });

  async function onSubmit(data: CreatePostSchema) {
    try {
      const result = await createPost(data);

      toast(result.message);
      navigate("/");
    } catch (error) {
      toast((error as Error).message.toString());
    }
  }

  return (
    <Card>
      <CardContent>
        <Form {...form}>
          <form action="" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex w-full mx-2 my-2">
              <Avatar className="w-10 h-10">
                <AvatarImage src={profile_image} />
              </Avatar>
              <CustomFormField control={form.control} name="conten">
                {(field) => (
                  <Input
                    {...field}
                    placeholder="Start post"
                    className="mx-4"
                    type="text"
                    disabled={form.formState.isSubmitting}
                    aria-disabled={form.formState.isSubmitting}
                    value={field.value as string}
                  />
                )}
              </CustomFormField>
            </div>
            <div className="flex mx-2 mt-2">
              <div className="flex-none my-auto">
                <Image className="ms-14 me-2" />
              </div>
              <div className="grow my-auto">
                <CustomFormField control={form.control} name="picture">
                  {(field) => (
                    <Input
                      {...field}
                      type="file"
                      className="w-1/2"
                      disabled={form.formState.isSubmitting}
                      aria-disabled={form.formState.isSubmitting}
                      value={field.value as string}
                    />
                  )}
                </CustomFormField>
              </div>
              <div className="flex-none">
                <Button type="submit" className=" space-x-2">
                  <span>Post</span>
                  <SendHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default PostContentBar;
