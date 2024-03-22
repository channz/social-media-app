import ContentCard from "@/components/content-card";
import Layout from "@/components/layout";
import SearchBar from "./contents/search";
import PostContentBar from "./contents/post-content";
import RightBar from "@/components/right-bar";
import { useEffect, useState } from "react";
import { Posting } from "@/utils/apis/post/type";
import { getPosts } from "@/utils/apis/post/api";
import { toast } from "sonner";
import { useToken } from "@/utils/contexts/token";

const Homepage = () => {
  const [data, setData] = useState<Posting[]>([]);
  const { token } = useToken();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getPosts();
      setData(result.data);
    } catch (error) {
      toast((error as Error).message.toString());
    }
  }

  return (
    <Layout>
      <div className="flex">
        <div className="flex flex-col w-full px-8 py-4 space-y-2 bg-zinc-100 overflow-auto">
          {token ? <SearchBar /> : null}
          {token ? (
            <PostContentBar profile_image={"https://github.com/shadcn.png"} />
          ) : null}
          <ContentCard
            user={"Mike Shinoda"}
            profile_image={"https://github.com/shadcn.png"}
            cover_image={"/src/assets/image-post.jpg"}
            caption={
              "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax."
            }
            id={1}
            comment={35}
          />
          {data?.map((postingan) => (
            <ContentCard
              key={postingan.user_id}
              user={postingan.users.nama}
              profile_image={postingan.users.picture!}
              cover_image={postingan.picture}
              caption={postingan.conten}
              id={postingan.user_id}
              comment={35}
            />
          ))}
        </div>
        <RightBar />
      </div>
    </Layout>
  );
};

export default Homepage;
