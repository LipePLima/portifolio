/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import api from "../../service/api";
import { Toast } from "primereact/toast";
import { TFunction } from "i18next";

export const getMyProjectByName = async (
  name: string,
  toast: React.RefObject<Toast>,
  t: TFunction<"translation", undefined>
): Promise<any> => {
  try {
    const response = await api.get(`/repos/LipePLima/${name}`);

    return response.data;
  } catch (error: any) {
    console.error(error);

    toast.current?.show({
      severity: "error",
      summary: "Error",
      detail: `${t("textErrorToast")}`,
      life: 2000,
    });
  }
};

export const getRepoReadme = async (
  name: string,
  toast: React.RefObject<Toast>,
  t: TFunction<"translation", undefined>
): Promise<any> => {
  try {
    const response = await api.get(`/repos/LipePLima/${name}/readme`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3.raw",
      },
    });

    if (typeof response.data === "string") {
      return response.data;
    }

    const readmeContent = await axios.get(response.data.download_url);

    return readmeContent.data;
  } catch (error) {
    console.error(error);

    toast.current?.show({
      severity: "error",
      summary: "Error",
      detail: `${t("textErrorToast")}`,
      life: 2000,
    });
  }
};
