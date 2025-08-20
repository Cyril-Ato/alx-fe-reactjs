import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={<Profile />} />

        
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
