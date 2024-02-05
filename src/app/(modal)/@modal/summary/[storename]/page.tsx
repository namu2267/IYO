const Page = async ({ params }: { params?: { storename: string } }) => {
  const storeParams = params?.storename;

  return (
    <div className="flex flex-col items-center bg-white fixed top-0 left-0 overflow-auto w-2/6 h-full">
      <p>서머리페이지 모달</p>
    </div>
  );
};

export default Page;
