import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const AccountSettings = () => {
  return (
    <>
      <Card>
        <div className="w-full flex flex-col">
          <div className="flex mx-5 my-5">
            <Avatar className="w-28 h-28">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <span className="mx-8 my-auto font-semibold text-lg">
              Change Avatar
            </span>
          </div>
          <div className="flex flex-col mx-5 mb-10">
            <form action="" className="space-y-4 w-96">
              <Input placeholder="name"></Input>
              <Input placeholder="email"></Input>
              <Input placeholder="password"></Input>
              <Separator />
              <Input placeholder="retype password"></Input>
              <div className="flex mt-20 gap-4">
                <Button className="w-48 hover:bg-slate-700">
                  Save Changes
                </Button>
                <Button className="w-48 bg-red-500 hover:bg-red-400">
                  Discard
                </Button>
              </div>
            </form>
          </div>
          <Separator />
          <div className="mx-5 my-5">
            <span className="text-red-500 font-semibold text-lg">
              Delete Account
            </span>
          </div>
        </div>
      </Card>
    </>
  );
};

export default AccountSettings;
