import { axiosInstance } from "@/src/shared/api";
import type { News } from "../model/types";

export const newsKeys = {
  all: ["news"] as const,
  list: () => [...newsKeys.all, "list"] as const,
};

export const getNewsList = async (): Promise<News[]> => {
  const { data } = await axiosInstance.get("https://api.jashtarkyimyly.kg/api/news/");
  return data;
};
