import Image from "next/image";
import dynamic from "next/dynamic";
import Map from "./components/naverMap/Map";

// const Map = dynamic(() => import("./components/naverMap/Map"), { ssr: false });

export default function Home() {
  return <Map />;
}
