import axios from "axios";

const BASE_URL = "https://api.github.com";
const token = import.meta.env.VITE_APP_GITHUB_TOKEN;

export const advancedSearchUsers = async ({
  username,
  location,
  minRepos,
  page = 1,
  perPage = 10
}) => {
  try {
    let queryParts = [];

    if (username) queryParts.push(`${username} in:login`);
    if (location) queryParts.push(`location:${location}`);
    if (minRepos) queryParts.push(`repos:>=${minRepos}`);

    const query = queryParts.join(" ");

    const res = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}`,
      {
        headers: token ? { Authorization: `token ${token}` } : {},
      }
    );

    return res.data;
  } catch (error) {
    console.error("Error fetching advanced search:", error);
    return null;
  }
};

export const getUserData = async (username) => {
  try {
    const res = await axios.get(`${BASE_URL}/users/${username}`, {
      headers: token ? { Authorization: `token ${token}` } : {},
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    return null;
  }
};
