import { QueryClient, QueryClientProvider } from "react-query";
import PostsComponent from "./components/PostsComponent";


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col items-center p-8">
        <h1 className="text-2xl font-bold mb-6">React Query Demo</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
