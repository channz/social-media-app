import AuthLayout from "@/components/auth-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Register = () => {
  return (
    <AuthLayout centerY>
      <div className="flex flex-col gap-8 mx-4 xl:mx-20">
        <h1 className="text-5xl text-wrap font-gothic">
          Share and explore new trends
        </h1>
        <h2 className="text-3xl text-wrap font-gothic">Sign in to tera.</h2>
        <form action="" className="space-y-4 w-80">
          <Input placeholder="email"></Input>
          <Input placeholder="password"></Input>
          <div className="flex flex-col mt-20 gap-4">
            <Button>Sign Up</Button>
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
            <Button variant={"secondary"}>Login</Button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Register;
