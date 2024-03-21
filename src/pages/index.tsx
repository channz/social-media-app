import ContentCard from "@/components/content-card";
import Layout from "@/components/layout";
import SearchBar from "./contents/search";
import PostContentBar from "./contents/post-content";
import RightBar from "@/components/right-bar";

const Homepage = () => {
  return (
    <Layout>
      <div className="flex">
        <div className="flex flex-col w-full px-8 py-4 space-y-2 bg-zinc-100 overflow-auto">
          <SearchBar />
          <PostContentBar profile_image={"https://github.com/shadcn.png"} />
          <ContentCard
            user={"John Doe"}
            profile_image={"https://github.com/shadcn.png"}
            cover_image={"/src/assets/image-post.jpg"}
            caption={
              "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax."
            }
            id={1}
            comment={35}
          />
          <ContentCard
            user={"Mike Shinoda"}
            profile_image={"https://github.com/shadcn.png"}
            caption={
              "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax."
            }
            id={1}
            comment={35}
          />
        </div>
        <RightBar />
      </div>
    </Layout>
  );
};

export default Homepage;
