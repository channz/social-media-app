import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Image, SendHorizontal } from "lucide-react";

interface Props {
  profile_image: string;
}

const PostContentBar = (props: Props) => {
  const { profile_image } = props;

  return (
    <Card>
      <CardContent>
        <div className="flex w-full mx-2 my-2">
          <Avatar className="w-10 h-10">
            <AvatarImage src={profile_image} />
          </Avatar>
          <Input placeholder="Start post" className="mx-4" />
        </div>
        <div className="flex mx-2 mt-2">
          <div className="flex-none my-auto">
            <Image className="ms-14 me-2" />
          </div>
          <div className="grow my-auto">
            <p className="">Image</p>
          </div>
          <div className="flex-none">
            <Button className=" space-x-2">
              <span>Post</span>
              <SendHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PostContentBar;
