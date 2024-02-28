import { getMainDb } from "@/services/fetchApi";
import { Storename } from "@/types/storeTypes";
import Image from "next/image";

const DetailPage = async ({ params }: Storename) => {
  const storeData = await getMainDb(params?.storename);

  const splitDescription = storeData.description?.split(".");

  return (
    <div className="flex flex-col items-center bg-white fixed top-0 right-0 overflow-auto w-4/6 h-full z-500">
      <header>
        <h1 className="my-20 text-4xl text-center">{storeData.engName}</h1>
      </header>
      <main className="p-20 border-y-2 border-black w-4/5 text-center text-clip">
        <div className="mb-10 text-end underline text-gray-400">
          {storeData.concept?.map((concept) => (
            <span key={storeData.engName} className="mx-2">
              #{concept}
            </span>
          ))}
        </div>
        <div>
          {splitDescription?.map((sentence: string, i: number) => {
            return sentence.includes("💡") ? (
              <p className="leading-[5em]" key={i}>
                {sentence}
              </p>
            ) : (
              <p key={i}>{sentence}</p>
            );
          })}
        </div>

        <div className="mt-20 flex flex-wrap ">
          {storeData.storeImages?.map(({ file_path, photoId }, i) => (
            <Image
              key={photoId}
              src={file_path}
              alt={`storePic${i}`}
              className="w-1/2 object-cover"
              width={500}
              height={500}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default DetailPage;
