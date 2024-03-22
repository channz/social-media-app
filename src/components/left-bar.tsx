import { Link } from "react-router-dom";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { Home, Settings2, LogOut } from "lucide-react";
import { toast } from "sonner";
import { useToken } from "@/utils/contexts/token";

const LeftBar = () => {
  const { changeToken } = useToken();

  function handleLogout() {
    changeToken();
    toast("Logout succesfully");
  }

  return (
    <nav className="w-48 ms-24 max-h-full h-screen sticky top-0">
      <div className="flex flex-col mt-8 mb-96 gap-7">
        <Link to={"/"}>
          <img
            src="/src/assets/logo_tera_black_large.png"
            className=""
            width={111}
            height={58}
            alt="tera"
          />
        </Link>
        <ul className="space-y-5">
          <Link to={"/"}>
            <li className="flex space-x-4 mb-5 text-2xl font-bold">
              <Home />
              <span>Home</span>
            </li>
          </Link>
          <Link to={"/profile"}>
            <li className="flex space-x-4 text-2xl font-bold">
              <Avatar className="w-6 h-6 mt-0.5">
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
              <span>Profile</span>
            </li>
          </Link>
        </ul>
      </div>
      <Separator />
      <ul className="flex flex-col my-14 space-y-5 justify-end">
        <Link to={"/settings"}>
          <li className="flex space-x-4 text-2xl font-bold">
            <Settings2 />
            <span>Settings</span>
          </li>
        </Link>
        <Link to={"/login"}>
          <li
            onClick={() => handleLogout()}
            className="flex space-x-4 text-2xl font-bold"
          >
            <LogOut />
            <span>Logout</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default LeftBar;
