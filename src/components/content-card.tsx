import { Avatar, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";
import { Ellipsis, MessageCircleMore } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Link } from "react-router-dom";
import { useToken } from "@/utils/contexts/token";

interface Props {
  user: string;
  profile_image: string;
  cover_image: string | null;
  caption: string | null;
  comment: number;
  id: number;
}

const ContentCard = (props: Props) => {
  const { user, profile_image, cover_image, caption, comment, id } = props;
  const { token } = useToken();

  return (
    <Link to={`content/${id}`}>
      <Card className="bg-white">
        <CardContent className="flex flex-col overflow-y-auto">
          <div className="flex mx-2 my-2">
            <div className="flex-none">
              <Avatar className="w-10 h-10">
                <AvatarImage src={profile_image} />
              </Avatar>
            </div>
            <div className="grow mx-4 my-auto">
              <p className="font-semibold text-lg">{user}</p>
            </div>
            <div className="flex-none my-auto">
              {token ? (
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Ellipsis />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" forceMount>
                    <DropdownMenuItem>Edit Post</DropdownMenuItem>
                    <DropdownMenuItem>Delete Post</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col ms-16 me-2 space-y-4">
            <p className="text-lg">{caption}</p>
            {cover_image ? (
              <img
                src={cover_image}
                className="aspect-[3/4] w-auto h-96 object-cover rounded-lg"
                alt=""
              />
            ) : null}
            <div className="flex space-x-2">
              <MessageCircleMore />
              <p>{comment}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ContentCard;
