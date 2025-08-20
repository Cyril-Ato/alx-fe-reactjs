import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

export default function PostsComponent() {
  const {
    data: posts,
    error,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 5000,              
    cacheTime: 1000 * 60 * 5,     
    refetchOnWindowFocus: true,   
    keepPreviousData: true,       
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="w-full max-w-2xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Posts</h2>
        <button
          onClick={() => refetch()}
          disabled={isFetching}
          className="bg-blue-600 text-white px-3 py-1 rounded disabled:opacity-50"
        >
          {isFetching ? "Refreshing..." : "Refetch Posts"}
        </button>
      </div>

      <ul className="space-y-2">
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} className="border p-3 rounded-md">
            <h3 className="font-bold">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
