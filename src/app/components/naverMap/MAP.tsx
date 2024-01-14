"use client";

import { useEffect, useRef, useState } from "react";

const Map = () => {
  // 지도의 중심 좌표를 표시
  const [mapCenter, setMapCenter] = useState({
    lat: 37.5080966,
    lng: 127.109609,
  });

  // 여러 개의 마커 위치 정보 배열
  const markerPositions = [
    { lat: 37.5080966, lng: 127.109609 },
    { lat: 37.5106203, lng: 127.108595 },
  ];

  // 마커들을 상태로 관리
  const [markers, setMarkers] = useState<naver.maps.Marker[]>([]);

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
    }

    return () => {
      console.log("trigger end");
    };
  }, []);

  useEffect(() => {
    const newMarker: naver.maps.Marker[] = [];
    markerPositions.forEach((pos) => {
      if (mapRef.current == null) return;
      const marker = getMarker(mapRef.current, pos);
      console.log(marker.get("position"));
      newMarker.push(marker);
    });
    setMarkers((item) => {
      return item.concat(newMarker);
    });
  }, []);

  return <div id="map" style={{ width: "100%", height: "100vh" }}></div>;
};

export default Map;
