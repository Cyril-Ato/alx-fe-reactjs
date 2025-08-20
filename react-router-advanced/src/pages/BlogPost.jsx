import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();

  return (
    <div>
      <h2 className="text-xl font-bold">Blog Post #{id}</h2>
      <p>This is a blog post dynamically loaded using the post ID in the URL.</p>
    </div>
  );
}
