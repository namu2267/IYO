"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

interface PinData {
  _id: string;
  lat: number;
  lng: number;
  name: string;
  engName: string;
}

const Map = () => {
  const router = useRouter();
  // 지도의 중심 좌표를 표시
  const [mapCenter, setMapCenter] = useState({
    lat: 37.5080966,
    lng: 127.109609,
  });

  const [pinsData, setPinsData] = useState<PinData[]>([]);

  const getPins = async () => {
    const response = await fetch("https://new-todos.site/pins", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

    const { pins }: { pins: PinData[] } = await response.json();
    setPinsData(pins);
    return;
  };

  const getNaverMap = () => {
    const mapOptions = {
      center: new naver.maps.LatLng(mapCenter.lat, mapCenter.lng),
      mapTypeControl: true,
      // 줌 컨트롤 표시 여부
      zoomControl: true,
      // 줌 컨트롤 옵션
      zoomControlOptions: {
        // 줌 컨트롤의 사이즈: 스몰
        style: naver.maps.ZoomControlStyle.SMALL,
        // 줌 컨트롤의 위치: 오른쪽 센터
        position: naver.maps.Position.RIGHT_CENTER,
      },
      // 지도 초기 줌 레벨
      zoom: 16,
    };
    const map = new naver.maps.Map("map", mapOptions);
    return map;
  };

  const mapRef = useRef<naver.maps.Map | null>(null);

  const getMarker = (
    map: naver.maps.Map,
    pos: { lat: number; lng: number }
  ) => {
    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(pos.lat, pos.lng),
      map,
    });
    return marker;
  };

  useEffect(() => {
    if (window && window.naver) {
      const map = getNaverMap();
      mapRef.current = map;
      getPins();
    }
  }, []);

  useEffect(() => {
    pinsData.forEach((pin) => {
      if (mapRef.current == null) return;
      const marker = getMarker(mapRef.current, pin);
      marker.addListener("click", () => {
        router.push(`/summary/${pin.engName}`);
      });
    });
  }, [pinsData]);

  return <div id="map" style={{ width: "100%", height: "100vh" }}></div>;
};

export default Map;
