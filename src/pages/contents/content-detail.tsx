import Layout from "@/components/layout";
import RightBar from "@/components/right-bar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Ellipsis, MessageCircleMore, Send } from "lucide-react";

const ContentDetail = () => {
  return (
    <Layout>
      <div className="flex">
        <Card className="bg-white mx-8">
          <CardContent className="flex flex-col w-full px-8 py-4 overflow-auto">
            <div className="flex mx-2 my-2">
              <div className="flex-none">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={"https://github.com/shadcn.png"} />
                </Avatar>
              </div>
              <div className="grow mx-4 my-auto">
                <p className="font-semibold text-lg">{"John Doe"}</p>
              </div>
              <div className="flex-none my-auto">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Ellipsis />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" forceMount>
                    <DropdownMenuItem>Edit Post</DropdownMenuItem>
                    <DropdownMenuItem>Delete Post</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="flex flex-col ms-16 me-2 space-y-4">
              <p className="text-lg">
                {
                  "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax."
                }
              </p>
              <img
                src={"/src/assets/image-post.jpg"}
                className="aspect-[3/4] w-auto h-96 object-cover rounded-lg"
                alt=""
              />
              <div className="flex space-x-2">
                <MessageCircleMore />
                <p>{35}</p>
              </div>
            </div>
          </CardContent>
          <Separator />
          <div className="flex flex-col w-full px-8 py-4">
            <div className="flex mx-2 my-2">
              <div className="flex-none">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={"https://github.com/shadcn.png"} />
                </Avatar>
              </div>
              <div className="grow mx-4 my-auto">
                <Input placeholder="Add a comment" />
              </div>
              <div className="flex-none">
                <Button className=" space-x-2">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          <Separator />
          <div className="flex flex-col w-full px-8 py-4 overflow-auto">
            <div className="flex mx-2 my-2">
              <div className="flex-none">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={"https://github.com/shadcn.png"} />
                </Avatar>
              </div>
              <div className="grow mx-4 my-auto">
                <p className="font-semibold text-lg">{"John Doe"}</p>
              </div>
              <div className="flex-none my-auto">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Ellipsis />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" forceMount>
                    <DropdownMenuItem>Edit Post</DropdownMenuItem>
                    <DropdownMenuItem>Delete Post</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="flex flex-col ms-16 me-2 space-y-4">
              <p className="text-lg">
                {
                  "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax."
                }
              </p>
              <div className="flex space-x-2">
                <MessageCircleMore />
                <p>{35}</p>
              </div>
            </div>
          </div>
        </Card>
        <RightBar />
      </div>
    </Layout>
  );
};

export default ContentDetail;
