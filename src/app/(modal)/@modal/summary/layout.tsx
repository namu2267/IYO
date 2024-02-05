import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  detailModal: ReactNode;
};

export default function Layout({ children, detailModal }: Props) {
  return (
    <div>
      {children}
      {detailModal}
    </div>
  );
}
