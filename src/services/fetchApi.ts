import { MainDB } from "@/types/storeTypse";

export const getMainDb = async (storeParams?: string) => {
  const res = await fetch(`http://localhost:4000/detail/${storeParams}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

  const { data } = await res.json();
  return data as MainDB;
};
