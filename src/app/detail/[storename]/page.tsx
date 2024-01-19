import Image from "next/image";

// const getDetailData = async (storename?: string) => {
//   if (storename == null) return null;
//   const res = await fetch(`http://192.168.0.9:4000/detail/${storename}`, {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//   });
//   const data = await res.json();

//   console.log(data.data.operationTime);
//   return data;
// };

// const Page = async ({ params }: { params?: { storename: string } }) => {
//   try {
//     await getDetailData(params?.storename);
//     return <div>{params!.storename}</div>;
//   } catch (err: unknown) {
//     throw err;
//   }

//   return <div className="h-full bg-slate-50"></div>;
// };

const Page = (storename: string) => {
  const store = {
    name: "몽쁘띠파리",
    engName: "mon_petit_paris",
    address: "서울 송파구 백제고분로43길 7",
    detailAddress: "1층",
    nearestRoute: {
      subwayLine: ["8", "9"],
      routeInfo: "석촌역 2번 출구에서 373m",
    },
    phoneNumber: null,
    introduce:
      "몽쁘띠파리는 서울 송파구 송리단길에 위치한 소품샵입니다 몽쁘띠파리에는 작가님들의 디자인문구들과 핸드메이드 소품, 인테리어 소품, 캔들, 선물하기 좋은 다양한 물품들이 준비되어 있습니다 사랑하는 사람들에게 선물하거나 나 자신에게 선물하고 싶을때 몽쁘띠파리를 찾아주세요 친구의 집에 놀러오듯이 편하게 놀러오세요 감사합니다",
    description:
      "송리단길에 위치하고 있는 몽쁘띠파리.몽쁘띠파리는 프랑스어로 ‘나의 작은 파리'라는 뜻이에요. 작고 아담하지만, 귀여운 캔들, 인테리어 소품, 헤어 스크런치, 에펠탑 엽서, 쿠키모양 비누까지 있을 것은 다 있답니다. 프랑스 음악이 흘러나오고 프랑스를 떠오르게 하는 소품들이 많아서 이름처럼 프랑스에 온 기분이 들어요.따뜻하고 느긋한 느낌이 나는 곳이에요. 선물을 사면 즉석에서 바로 포장도 가능해요.석촌역, 송파나루역 모두 도보로 방문할 수 있어요.",
    updatedAt: new Date(),
    concept: ["프랑스", "편안", "친절"],
    imgUrl: [
      "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231125_38%2F1700922167896FQxiC_JPEG%2F1000013755.jpg",
      "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231120_155%2F1700470516615VL1hG_JPEG%2F1000013726.jpg",
      "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231113_236%2F1699844760253yiVkC_JPEG%2F20231112_115051.jpg",
      "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231120_56%2F1700470158510VQaYI_JPEG%2F1000013723.jpg",
      "https://i.pinimg.com/550x/26/50/b0/2650b0467036348496faccd3be6dcf25.jpg",
    ],
  };

  const splitDescription = store.description.split(".");

  // const [picRatioStyle, setPicRatioStyle] = useState([]);

  // const getPicRatio = (ratio: number) => {
  //   return ratio > 1 ? "w-full" : "w-1/2";
  // };

  // const getRatioImgUrl = () => {
  //   const calculateRatio = (width: number, height: number) => width / height;

  //   store.imgUrl.foreach((url) => )
  // };

  return (
    <div className="flex flex-col items-center bg-white fixed top-0 right-0 overflow-auto w-4/5 h-full z-500">
      <header>
        <h1 className="my-20 text-4xl text-center">{store.name}</h1>
      </header>
      <main className="p-20 border-y-2 border-black w-4/5 text-center text-clip">
        <div className="mb-10 text-end underline text-gray-400">
          {store.concept.map((concept, i) => (
            <span key={i} className="mx-2">
              #{concept}
            </span>
          ))}
        </div>
        <section>
          {splitDescription.map((sentence, i) => (
            <p key={i}>{sentence}</p>
          ))}
        </section>
        <section className="mt-20 flex flex-wrap ">
          {store.imgUrl.map((pic, i) => (
            <img
              key={i}
              src={pic}
              alt="`storePic${i}`"
              className="w-1/2 object-cover"
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Page;
