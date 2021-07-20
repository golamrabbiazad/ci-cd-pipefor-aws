import { useRouter } from "next/router";
import posts from "../../posts.json";

export default function BlogURL() {
  const router = useRouter();
  const { id } = router.query;

  const post = posts[id];

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </>
  );
}
