import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import LeftBar from "./left-bar";
import RightBar from "./right-bar";

interface Props {
  children: ReactNode;
  centerY?: boolean;
  centerX?: boolean;
}

function Layout(props: Props) {
  const { children, centerX, centerY } = props;

  return (
    <div className="w-full container h-dvh bg-white overflow-auto flex">
      <LeftBar />
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
      <RightBar />
    </div>
  );
}

export default Layout;
