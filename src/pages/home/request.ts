import axios from "axios";

export const getMyRepos = async () => {
  try {
    const githubAPI = await axios.get("https://api.github.com/user/repos", {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });

    return githubAPI.data;
  } catch (error) {
    console.error("Erro ao buscar os repositórios:", error);
  }
};
