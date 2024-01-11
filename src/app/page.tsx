import Image from "next/image";
import MAP from "./components/naverMap/MAP";

export default function Home() {
  return (
    <div id="map" style={{ width: "100vw", height: "100vh" }}>
      <MAP />
    </div>
  );
}
