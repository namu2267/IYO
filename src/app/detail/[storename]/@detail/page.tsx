import Image from "next/image";

interface MainDB {
  name: string; // 매장이름
  socialLinks: string | null; // 인스타계정만 없을땐 null
  engName: string; // 매장이름(영어)
  category: string; // 소품샵의 종류? 테마?
  address: string; // 도로명 주소 || 지번 주소
  detailAddress: string | null; // 상세 주소
  nearestRoute: {
    subwayLine: string[] | null; // 지하철 호선
    routeInfo: string; // 정보
  } | null;
  operationTime: {
    day: string; // Mon, Tue, Wed, Thu, Fri, Sat, Sun
    startTime: string | null; // HH:MM hour:24
    endTime: string | null; // HH:MM hour:24
  }[];
  phoneNumber: string | null; // 매장번호
  coord: {
    lat: number;
    lng: number;
  };
  introduce: string | null; // 간단한 설명란
  description: string | null; // 커스텀 설명란
  updatedAt: string; // Date String (DB에 올려놓은 날 기준 Date 객체)
  concept: string[] | null;
  storeImages: StoreImage[];
}

interface StoreImage {
  photoId: string;
  file_path: string; // cdn path
}

const Page = async ({ params }: { params?: { storename: string } }) => {
  const storeParams = params?.storename;

  const res = await fetch(`http://localhost:4000/detail/${storeParams}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  const { data } = await res.json();

  const storeData = data as MainDB;

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

export default Page;
