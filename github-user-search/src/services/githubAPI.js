import axios from "axios";

const BASE_URL = "https://api.github.com/users";
const token = import.meta.env.VITE_APP_GITHUB_TOKEN; 

export const getUserData = async (username) => {
  try {
    const res = await axios.get(`${BASE_URL}/${username}`, {
      headers: token ? { Authorization: `token ${token}` } : {} 
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    return null;
  }
};
