import { Separator } from "./ui/separator";

const Sidebar = () => {
  return (
    <>
      <div className="w-1/4 flex flex-col mx-5 my-5 gap-5">
        <img
          src="/src/assets/logo_tera_black_large.png"
          className=""
          width={111}
          height={58}
          alt="tera"
        />
        <h1 className="text-2xl font-bold">Home</h1>
        <h1 className="text-2xl font-bold">Profile</h1>
      </div>
      <Separator />
      <div className="flex flex-col mx-5 w-full my-5 gap-5">
        <h1 className="text-2xl font-bold">Settings</h1>
        <h1 className="text-2xl font-bold">Logout</h1>
      </div>
    </>
  );
};

export default Sidebar;
