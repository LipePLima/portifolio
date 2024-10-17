import api from "../../service/api";

export const getMyRepoByName = async (name: string): Promise<void> => {
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
