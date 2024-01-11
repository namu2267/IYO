import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const mapAPIKey = process.env.NEXT_PUBLIC_NAVER_MAP_API_CLIENT_ID;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "소품샵 찾기, IYO",
  description: "주위의 이쁜 소품샵을 알려드려요.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          type="text/javascript"
          src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${mapAPIKey}&callback=initMap`}
        ></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
