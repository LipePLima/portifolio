import { Dispatch, SetStateAction } from "react";
import api from "../../service/api";

export const getMyRepos = async (
  setLoading: Dispatch<SetStateAction<boolean>>
) => {
  setLoading(true);

  try {
    const response = await api.get("/user/repos", {
      params: {
        per_page: 40,
        page: 1,
      },
    });

    setLoading(false);

    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    setLoading(false);
    console.error(
      `Erro ao buscar os repositórios: ${error.response?.status} - ${error.response?.data?.message}`
    );
  }
};
