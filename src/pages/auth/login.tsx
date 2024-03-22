import AuthLayout from "@/components/auth-layout";
import { CustomFormField } from "@/components/custom-formfield";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginUser } from "@/utils/apis/user/api";
import { LoginSchema, loginSchema } from "@/utils/apis/user/type";
import { useToken } from "@/utils/contexts/token";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const { changeToken } = useToken();
  const navigate = useNavigate();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginSchema) {
    try {
      const result = await loginUser(data);
      changeToken(result.data.token);
      toast(result.message);
      navigate("/");
    } catch (error) {
      toast((error as Error).message.toString());
    }
  }

  return (
    <AuthLayout centerY>
      <div className="flex flex-col gap-8 mx-4 xl:mx-20">
        <h1 className="text-5xl text-wrap font-gothic">
          Share and explore new trends
        </h1>
        <h2 className="text-3xl text-wrap font-gothic">Sign in to tera.</h2>
        <Form {...form}>
          <form
            action=""
            className="space-y-4 w-80"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <CustomFormField control={form.control} name="email">
              {(field) => (
                <Input
                  {...field}
                  placeholder="johmdoe@mail.com"
                  type="email"
                  disabled={form.formState.isSubmitting}
                  aria-disabled={form.formState.isSubmitting}
                  value={field.value as string}
                />
              )}
            </CustomFormField>
            <CustomFormField control={form.control} name="password">
              {(field) => (
                <Input
                  {...field}
                  placeholder="Password"
                  type="password"
                  disabled={form.formState.isSubmitting}
                  aria-disabled={form.formState.isSubmitting}
                  value={field.value as string}
                />
              )}
            </CustomFormField>
            <div className="flex flex-col mt-20 gap-4">
              <Button type="submit">Login</Button>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-background px-2 text-muted-foreground">
                    or
                  </span>
                </div>
              </div>
              <Button variant={"secondary"}>
                <Link to="/register">Sign Up</Link>
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </AuthLayout>
  );
};

export default Login;
