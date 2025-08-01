import axios from "axios";

const SEARCH_URL = "https://api.github.com/search/users";
const token = import.meta.env.VITE_APP_GITHUB_TOKEN;

export const advancedSearchUsers = async ({ username, location, minRepos }) => {
  try {
    let queryParts = [];

    if (username) queryParts.push(`${username} in:login`);
    if (location) queryParts.push(`location:${location}`);
    if (minRepos) queryParts.push(`repos:>=${minRepos}`);

    const query = queryParts.join(" ");

    const res = await axios.get(`${SEARCH_URL}?q=${encodeURIComponent(query)}`, {
      headers: token ? { Authorization: `token ${token}` } : {},
    });

    return res.data;
  } catch (error) {
    console.error("Error fetching advanced search:", error);
    return null;
  }
};
