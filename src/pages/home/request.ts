/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction } from "react";
import { Toast } from "primereact/toast";
import api from "../../service/api";
import { TFunction } from "i18next";

export const getMyRepos = async (
  page: number,
  rows: number,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setTotalRecords: Dispatch<SetStateAction<number>>,
  toast: React.RefObject<Toast>,
  t: TFunction<"translation", undefined>
) => {
  setLoading(true);

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
  } catch (error) {
    setLoading(false);

    console.error(error);
    
    toast.current?.show({
      severity: "error",
      summary: "Error",
      detail: `${t("textErrorToast")}`,
      life: 2000,
    });
  }
};
