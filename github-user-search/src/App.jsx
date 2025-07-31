import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import { getUserData } from "./services/githubAPI";
import "./App.css";

export default function App() {
  const [user, setUser] = useState(null);

  const handleSearch = async (username) => {
    const data = await getUserData(username);
    setUser(data);
  };

  return (
    <div className="app">
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      <UserCard user={user} />
    </div>
  );
}
