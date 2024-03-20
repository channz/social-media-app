import { Separator } from "./ui/separator";

const LeftBar = () => {
  return (
    <nav className="w-48 h-dvh max-h-full">
      <div className="flex flex-col mx-5 mt-8 mb-96 gap-7">
        <img
          src="/src/assets/logo_tera_black_large.png"
          className=""
          width={111}
          height={58}
          alt="tera"
        />
        <ul className="space-y-4">
          <li className="text-2xl font-bold">Home</li>
          <li className="text-2xl font-bold">Profile</li>
        </ul>
      </div>
      <Separator />
      <ul className="mx-5 my-14 space-y-5">
        <li className="text-2xl font-bold">Settings</li>
        <li className="text-2xl font-bold">Logout</li>
      </ul>
    </nav>
  );
};

export default LeftBar;
