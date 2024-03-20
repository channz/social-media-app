import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  centerY?: boolean;
  centerX?: boolean;
}

function Layout(props: Props) {
  const { children, centerX, centerY } = props;

  return (
    <div className="w-full h-dvh bg-white overflow-auto flex flex-col">
      <div
        className={cn(
          "container grow py-4 px-8 flex flex-col",
          centerX && "items-center",
          centerY && "justify-center"
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default Layout;
