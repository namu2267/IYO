import { Metadata } from "next";
import { getMainDb } from "@/services/fetchApi";
import { Storename } from "@/types/storeTypes";
import Detail from "@/components/detail/Detail";

const getStoreDB = async ({ params }: { params?: { storename: string } }) => {
  const storeParams = params?.storename;
  const storeData = await getMainDb(storeParams);
  return storeData;
};

export const generateMetadata = async ({
  params,
}: Storename): Promise<Metadata> => {
  const storeData = await getStoreDB({ params });

  return {
    title: `${storeData.name}`,
    description: `${storeData?.description}`,
    metadataBase: new URL(`https://new-todos.site/detail/${storeData.engName}`),
    keywords: `${storeData.name},${storeData.category},${storeData.address}, 
    ${storeData.concept}, 소품샵, IYO detail`,
  };
};

const DetailPage = async ({ params }: { params?: { storename: string } }) => {
  const storeData = await getStoreDB({ params });

  return <Detail storeData={storeData} />;
};

export default DetailPage;
