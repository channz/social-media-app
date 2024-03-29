import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import LeftBar from "./left-bar";

interface Props {
  children: ReactNode;
  centerY?: boolean;
  centerX?: boolean;
}

function Layout(props: Props) {
  const { children, centerX, centerY } = props;

  return (
    <div className="w-full h-dvh bg-white overflow-auto flex">
      <LeftBar />
      <div className="w-full h-dvh bg-white flex">
        <div
          className={cn(
            "container grow px-8 flex flex-col",
            centerX && "items-center",
            centerY && "justify-center"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
