import { MainDB } from "@/types/storeTypes";

export const getMainDb = async (storeParams?: string) => {
  const res = await fetch(`https://new-todos.site/detail/${storeParams}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

  const { data } = await res.json();
  return data as MainDB;
};
