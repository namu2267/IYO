import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Map from "./components/naverMap/Map";

const mapAPIKey = process.env.NEXT_PUBLIC_NAVER_MAP_API_CLIENT_ID;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "소품샵 찾기, IYO",
  description: "주위의 이쁜 소품샵을 알려드려요.",
};

// async function enableMocking() {
//   if (process.env.NODE_ENV !== "development") {
//     return;
//   }

//   const { worker } = await import("../mocks/browser");
//   // `worker.start()` returns a Promise that resolves
//   // once the Service Worker is up and ready to intercept requests.
//   return worker.start();
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${mapAPIKey}&callback=initMap`}
          type="text/javascript"
          strategy="beforeInteractive"
        />

        {/* <script
          defer
          type="text/javascript"
          src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${mapAPIKey}&callback=initMap`}
        ></script> */}
      </head>
      <body className="relative">
        <div>
          <Map />
          {children}
        </div>
      </body>
    </html>
  );
}
