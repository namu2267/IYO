import { Metadata } from "next";
import Summary from "@/components/summary/Summary";
import { getMainDb } from "@/services/fetchApi";
import { Storename } from "@/types/storeTypes";

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
    description: `${storeData?.introduce}`,
    metadataBase: new URL(`http://localhost:3000/summary/${storeData.engName}`),
    keywords: `${storeData.name},${storeData.category},${storeData.address}, 
    ${storeData.concept}, 소품샵`,
  };
};

const SummaryPage = async ({ params }: { params?: { storename: string } }) => {
  const storeData = await getStoreDB({ params });

  return <Summary storeData={storeData} />;
};

export default SummaryPage;
