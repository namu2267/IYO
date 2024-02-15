import { ReactNode } from "react";

export default function Layout({
  children,
  summary,
  detail,
}: {
  children: ReactNode;
  detail: ReactNode;
  summary: ReactNode;
}) {
  return (
    <>
      {children}
      {summary}
      {detail}
    </>
  );
}
