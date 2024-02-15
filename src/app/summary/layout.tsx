import { ReactNode } from "react";
import Map from "@/components/naverMap/Map";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Map />
      {children}
    </>
  );
}
