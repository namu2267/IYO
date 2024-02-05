import React from "react";

const Page = ({ params }: { params?: { storename: string } }) => {
  return <div>{params.storename} 디테일페이지 모달</div>;
};

export default Page;
