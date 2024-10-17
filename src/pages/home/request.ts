import api from "../../service/api";

export const getMyRepos = async () => {
  try {
    const response = await api.get("/user/repos");
    
    return response.data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(
      `Erro ao buscar os repositórios: ${error.response?.status} - ${error.response?.data?.message}`
    );
  }
};
