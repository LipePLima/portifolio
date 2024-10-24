import { Dispatch, SetStateAction } from "react";
import api from "../../service/api";

export const getMyRepos = async (
  page: number,
  rows: number,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setTotalRecords: Dispatch<SetStateAction<number>>
) => {
  setLoading(true);

  console.log("PAGE >", page);
  console.log("ROW >", rows);

  try {
    const response = await api.get("/user/repos", {
      params: {
        per_page: rows + 10,
        page: page,
      },
    });

    const linkHeader = response.headers["link"];

    if (linkHeader) {
      const lastPageMatch = linkHeader.match(/&page=(\d+)>; rel="last"/);

      if (lastPageMatch) {
        const lastPage = parseInt(lastPageMatch[1], 10);
        const totalRepos = lastPage * rows;
        setTotalRecords(totalRepos);
      }
    } else {
      setTotalRecords(response.data.length);
    }

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
