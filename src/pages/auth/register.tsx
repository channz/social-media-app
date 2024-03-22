import AuthLayout from "@/components/auth-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RegisterSchema, registerSchema } from "@/utils/apis/user/type";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerUser } from "@/utils/apis/user/api";
import { toast } from "sonner";
import { Form } from "@/components/ui/form";
import { CustomFormField } from "@/components/custom-formfield";

const Register = () => {
  const navigate = useNavigate();

  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      nama: "",
      email: "",
      password: "",
      repassword: "",
      hp: "",
    },
  });

  async function onSubmit(data: RegisterSchema) {
    try {
      const result = await registerUser(data);

      toast(result.message);
      navigate("/login");
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
        <h2 className="text-3xl text-wrap font-gothic">Join us now</h2>
        <Form {...form}>
          <form
            action=""
            className="space-y-4 w-80"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <CustomFormField control={form.control} name="nama">
              {(field) => (
                <Input
                  {...field}
                  placeholder="name"
                  disabled={form.formState.isSubmitting}
                  aria-disabled={form.formState.isSubmitting}
                  value={field.value as string}
                />
              )}
            </CustomFormField>
            <CustomFormField control={form.control} name="email">
              {(field) => (
                <Input
                  {...field}
                  placeholder="johndoe@mail.com"
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
            <CustomFormField control={form.control} name="repassword">
              {(field) => (
                <Input
                  {...field}
                  placeholder="Confirm Password"
                  type="password"
                  disabled={form.formState.isSubmitting}
                  aria-disabled={form.formState.isSubmitting}
                  value={field.value as string}
                />
              )}
            </CustomFormField>
            <CustomFormField control={form.control} name="hp">
              {(field) => (
                <Input
                  {...field}
                  placeholder="628xxxxxxxxx"
                  type="tel"
                  disabled={form.formState.isSubmitting}
                  aria-disabled={form.formState.isSubmitting}
                  value={field.value as string}
                />
              )}
            </CustomFormField>
            <div className="flex flex-col mt-20 gap-4">
              <Button type="submit">Sign Up</Button>
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
              <Button type="button" variant={"secondary"}>
                <Link to="/login">Login</Link>
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </AuthLayout>
  );
};

export default Register;
