import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  centerY?: boolean;
  centerX?: boolean;
}

function AuthLayout(props: Props) {
  const { children, centerX, centerY } = props;

  return (
    <div className="w-full h-dvh bg-white overflow-auto flex">
      <div className="flex flex-col mx-32 w-1/2 justify-center items-center">
        <img src="/src/assets/logo_tera_black_large.png" alt="tera" />
      </div>
      <div
        className={cn(
          "grow py-4 px-8 flex flex-col",
          centerX && "items-center",
          centerY && "justify-center"
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
