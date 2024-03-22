import Layout from "@/components/layout";
import RightBar from "@/components/right-bar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { getPostDetails } from "@/utils/apis/post/api";
import { Posting } from "@/utils/apis/post/type";
import { useToken } from "@/utils/contexts/token";
import { Ellipsis } from "lucide-react";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { toast } from "sonner";
import AddComment from "../comments/add-comment";
import CommentPage from "../comments/comment";

const ContentDetail = () => {
  const { token } = useToken();
  // const params = useParams();

  const [data, setData] = useState<Posting[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getPostDetails(1);
      setData(result.data);
    } catch (error) {
      toast((error as Error).message.toString());
    }
  }

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
            </div>
          </CardContent>
          {token ? <Separator /> : null}
          {token ? <AddComment /> : null}
          <Separator />
          {data?.map((commentss) => (
            <CommentPage key={commentss.user_id} />
          ))}
        </Card>
        <RightBar />
      </div>
    </Layout>
  );
};

export default ContentDetail;
