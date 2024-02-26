import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

const mapAPIKey = process.env.NEXT_PUBLIC_NAVER_MAP_API_CLIENT_ID;

export const metadata: Metadata = {
  title: {
    default: "소품샵 찾기, IYO",
    template: "IYO | %s",
  },
  description: "주위의 이쁜 소품샵을 알려드려요.",
  keywords: "소품샵, 소품, 놀거리, 구경",
  metadataBase: new URL("http://localhost:3000"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          defer
          src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${mapAPIKey}&callback=initMap`}
          type="text/javascript"
          strategy="beforeInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
