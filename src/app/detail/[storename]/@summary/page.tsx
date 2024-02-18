import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/summary/Nav";

interface MainDB {
  name: string; // 매장이름
  socialLink: string | null; // 인스타계정만 없을땐 null
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
  width: number;
  height: number;
}

const Page = async ({ params }: { params?: { storename: string } }) => {
  const storeParams = params?.storename;

  const res = await fetch(`https://new-todos.site/detail/${storeParams}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  const { data } = await res.json();
  const storeData = data as MainDB;

  const updateData = new Date(storeData.updatedAt).toISOString().slice(0, 10);

  return (
    <div className="flex flex-col bg-white absolute top-0 left-0 overflow-auto w-2/6 h-full z-101">
      <div className="fixed bottom-5 left-[30%]">🙉</div>
      <div className="my-10 relative">
        <div className="my-10">
          <h1 className="text-3xl text-center">{storeData.name}</h1>
          <p className=" text-center text-gray-400">{storeData.category}</p>
        </div>
        <div className="relative w-full h-96">
          <Image
            key={storeData.storeImages[0].photoId}
            src={storeData.storeImages[0].file_path}
            alt={storeData.engName + "메인사진"}
            width={0}
            height={0}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            priority={true}
          />
        </div>
        <Nav />
        <main className="p-10 border-b-2 border-gray-300 	border-style: solid">
          <div className="flex items-center m-3">
            <div className="w-5 h-5 bg-logo-location bg-no-repeat bg-cover bg-center"></div>
            <p className="ml-2">
              {storeData.address} {storeData.detailAddress}
            </p>
          </div>
          <div className="flex items-center m-3">
            <div className="w-5 h-5 bg-logo-subway bg-no-repeat bg-cover bg-center"></div>
            <p className="ml-2">
              {storeData.nearestRoute?.subwayLine &&
                (storeData.nearestRoute.subwayLine.length === 1
                  ? storeData.nearestRoute.subwayLine[0]
                  : storeData.nearestRoute.subwayLine.join(" • "))}
              호선, {storeData.nearestRoute?.routeInfo}
            </p>
          </div>
          <div className="flex items-center flex-col relative m-3">
            <div className="w-5 h-5 bg-logo-time bg-no-repeat bg-cover bg-center absolute left-0"></div>
            {storeData.operationTime.map((operation) => {
              return (
                <div
                  className="ml-2 flex flex-col"
                  key={storeData.engName + operation.day}
                >
                  <div className="flex">
                    <span className="font-semibold mr-2">{operation.day}</span>
                    <p>
                      {operation.startTime && operation.endTime
                        ? `${operation.startTime} - ${operation.endTime} `
                        : "휴무"}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center m-3">
            <div className="w-5 h-5 bg-logo-instagram bg-no-repeat bg-cover bg-center"></div>
            <Link
              href={storeData.socialLink || "#"}
              target="_blank"
              className="ml-2"
            >
              {storeData.socialLink || ""}
            </Link>
          </div>
          <div className="flex items-center m-3">
            <div className="w-5 h-5 bg-logo-phone bg-no-repeat bg-cover bg-center"></div>
            <p className="ml-2">{storeData.phoneNumber}</p>
          </div>
        </main>

        <Link
          href={`/summary/${storeParams}`}
          className="bg-black text-white text-center p-3 font-bold cursor-pointer block hover:bg-slate-700"
        >
          상세정보 끄기
        </Link>
      </div>

      <header className="p-8 bg-white fixed top-0 left-0 w-2/6 h-5 z-100">
        <h1 className="text-4xl font-bold ">IYO</h1>
      </header>

      {storeData.introduce && (
        <div>
          <h2 className="ml-11 text-lg">Introduce</h2>
          <p className="p-8 mb-10 indent-3">{storeData.introduce}</p>
        </div>
      )}

      <footer className="relative">
        {updateData && (
          <div className="mx-2 mt-10 absolute right-0 bottom-0">
            <span className="text-gray-300 mr-4">정보업데이트</span>
            <span className="text-gray-300">{updateData}</span>
          </div>
        )}
      </footer>
    </div>
  );
};

export default Page;
