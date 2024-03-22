import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { deleteComment } from "@/utils/apis/comment/api";
import { useToken } from "@/utils/contexts/token";
import { Ellipsis } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "sonner";

const CommentPage = () => {
  const { token } = useToken();
  //   const navigate = useNavigate();

  //   async function handleDelete(post_id: number) {
  //     try {
  //       const result = await deleteComment(post_id);
  //       toast(result.message);
  //       localStorage.removeItem("token");
  //       navigate("/");
  //     } catch (error) {
  //       toast((error as Error).message);
  //     }
  //   }

  return (
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
          {token ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Ellipsis />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" forceMount>
                <DropdownMenuItem>Edit Post</DropdownMenuItem>
                <DropdownMenuItem
                // onClick={() => handleDelete(post_id)}
                >
                  Delete Post
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : null}
        </div>
      </div>
      <div className="flex flex-col ms-16 me-2 space-y-4">
        <p className="text-lg">
          {
            "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax."
          }
        </p>
      </div>
    </div>
  );
};

export default CommentPage;
