// import axios from "axios";
import axios from "axios";
import api from "../../service/api";

export const getMyProjectByName = async (name: string): Promise<void> => {
  try {
    const response = await api.get(`/repos/LipePLima/${name}`);

    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(
      `Erro ao buscar o repositório "${name}": ${error.response?.status} - ${error.response?.data?.message}`
    );
  }
};

export const getRepoReadme = async (name: string) => {
  try {
    const response = await api.get(`/repos/LipePLima/${name}/readme`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3.raw",
      },
    });

    console.log("RESPONSE >>>>>>", response);

    if (typeof response.data === "string") {
      return response.data;
    }

    const readmeContent = await axios.get(response.data.download_url);

    return readmeContent.data;
  } catch (error) {
    console.error("Erro ao buscar o README:", error);
  }
};
