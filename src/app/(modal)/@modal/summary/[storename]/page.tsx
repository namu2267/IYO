import Link from "next/link";
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
  width: number;
  height: number;
}

const Page = async ({ params }: { params?: { storename: string } }) => {
  const storeParams = params?.storename;

  const res = await fetch(`http://localhost:4000/detail/${storeParams}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  const { data } = await res.json();
  const storeData = data as MainDB;

  const updateData = new Date(storeData.updatedAt).toISOString().slice(0, 10);

  return (
    <div className="flex flex-col bg-white absolute top-0 left-0 overflow-auto w-2/6 h-full">
      <div className="my-10">
        <div className="my-10">
          <h1 className="text-3xl text-center">{storeData.name}</h1>
          <p className=" text-center text-gray-400">{storeData.category}</p>
        </div>
        <div className="relative w-full h-96">
          <Image
            key={storeData.storeImages[0].photoId}
            src={storeData.storeImages[0].file_path}
            alt={storeData.storeImages[0] + "메인사진"}
            width={0}
            height={0}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            priority={true}
            className="z-1"
            // unoptimized={true}
          />
        </div>
        <main className="my-10 border-b-2 border-gray-200 	border-style: solid">
          <div className="flex items-center">
            <div className="w-5 h-5 bg-logo-location bg-no-repeat bg-cover bg-center"></div>
            <p>
              {storeData.address} {storeData.detailAddress}
            </p>
          </div>
          <div className="flex items-center">
            <div className="w-5 h-5 bg-logo-subway bg-no-repeat bg-cover bg-center"></div>
            <p>
              {storeData.nearestRoute?.subwayLine &&
                (storeData.nearestRoute.subwayLine.length === 1
                  ? storeData.nearestRoute.subwayLine[0]
                  : storeData.nearestRoute.subwayLine.join(" • "))}
              호선, {storeData.nearestRoute?.routeInfo}
            </p>
          </div>
          <div className="flex items-center">
            <div className="w-5 h-5 bg-logo-time bg-no-repeat bg-cover bg-center"></div>
            {storeData.operationTime.map((operation) => {
              return (
                <p key={operation.day}>
                  {operation.day}
                  {operation.startTime && operation.endTime
                    ? `${operation.startTime} open ${operation.endTime} close`
                    : "휴무"}
                </p>
              );
            })}
          </div>
          <div className="flex items-center">
            <div className="w-5 h-5 bg-logo-instagram bg-no-repeat bg-cover bg-center"></div>
            <p>{storeData.socialLinks}</p>
          </div>
          <div className="flex">
            <div className="w-5 h-5 bg-logo-phone bg-no-repeat bg-cover bg-center"></div>
            <p>{storeData.phoneNumber}</p>
          </div>
        </main>
        <div className="absolute bottom-0 right-0">
          <p>{updateData}</p>
        </div>

        <Link href={`detail/${storeParams}`}>
          <button>디테일 페이지 이동버튼</button>
        </Link>
      </div>

      <header className="p-8 bg-white fixed top-0 left-0 w-2/6 h-5 z-100">
        <h1 className="text-4xl font-bold ">IYO</h1>
      </header>
    </div>
  );
};

export default Page;
