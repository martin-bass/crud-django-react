import { useEffect, useState } from "react";
import { getAllPosts } from "../api/posts.api";
import { Post } from "../api/types";

//Masonry
import Masonry from "react-masonry-css";
import "../styles/Masonry.css";

//Chakra UI
import { Stack } from "@chakra-ui/react";

//Components
import CardItem from "../components/CardItem";

function PostList() {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    800: 1,
    600: 1,
  };

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const LoadPosts = async () => {
      const res = await getAllPosts();
      setPosts(res.data);
    };
    LoadPosts();
  }, []);

  return (
    <Stack w={"full"}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {posts.map((post) => (
          <CardItem key={post.id} post={post} />
        ))}
      </Masonry>
    </Stack>
  );
}

export default PostList;
