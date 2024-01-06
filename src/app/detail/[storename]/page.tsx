import React from "react";

const Page = ({ params }: { params?: { storename: string } }) => {
  return <div>{params.storename}</div>;
};

export default Page;
