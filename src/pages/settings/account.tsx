import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const AccountSettings = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-end">
        <div className="flex">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" width={96} />
          </Avatar>
          <span>Change Avatar</span>
        </div>
        <div className="flex flex-col">
          <form action="" className="space-y-4 w-80">
            <Input placeholder="name"></Input>
            <Input placeholder="email"></Input>
            <Input placeholder="password"></Input>
            <Input placeholder="retype password"></Input>
            <div className="flex grow mt-20 gap-4">
              <Button>Save Changes</Button>
              <Button className="bg-red-500">Discard</Button>
            </div>
          </form>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default AccountSettings;
