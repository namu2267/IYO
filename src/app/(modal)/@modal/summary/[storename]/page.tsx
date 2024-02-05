import Link from "next/link";

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
}

const Page = async ({ params }: { params?: { storename: string } }) => {
  const storeParams = params?.storename;

  const res = await fetch(`http://localhost:4000/detail/${storeParams}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  const { data } = await res.json();

  const storeData = data as MainDB;

  return (
    <div className="flex flex-col bg-white fixed top-0 left-0 overflow-auto w-2/6 h-full">
      <header className="p-8">
        <h1 className="text-4xl font-bold fixed">IYO</h1>
      </header>
      <div className="my-10">
        <h1 className="text-3xl text-center">{storeData.name}</h1>
        <Link href={`/detail/${storeParams}`}>
          <button>디테일 페이지 이동버튼</button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
