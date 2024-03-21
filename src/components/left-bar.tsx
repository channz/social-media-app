import { Avatar, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { Home, Settings2, LogOut } from "lucide-react";

const LeftBar = () => {
  return (
    <nav className="w-48 h-dvh ms-24 max-h-full h-screen sticky top-0">
      <div className="flex flex-col mt-8 mb-96 gap-7">
        <img
          src="/src/assets/logo_tera_black_large.png"
          className=""
          width={111}
          height={58}
          alt="tera"
        />
        <ul className="space-y-4">
          <li className="flex space-x-4 text-2xl font-bold">
            <Home />
            <span>Home</span>
          </li>
          <li className="flex space-x-4 text-2xl font-bold">
            <Avatar className="w-6 h-6 mt-0.5">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <span>Profile</span>
          </li>
        </ul>
      </div>
      <Separator />
      <ul className="my-14 space-y-5">
        <li className="flex space-x-4 text-2xl font-bold">
          <Settings2 />
          <span>Settings</span>
        </li>
        <li className="flex space-x-4 text-2xl font-bold">
          <LogOut />
          <span>Logout</span>
        </li>
      </ul>
    </nav>
  );
};

export default LeftBar;
