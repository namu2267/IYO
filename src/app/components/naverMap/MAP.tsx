"use client";
import React, { useEffect, useRef, useState } from "react";

const Map = () => {
  // 지도의 중심 좌표를 표시
  const [mapCenter, setMapCenter] = useState({
    lat: 37.5080966,
    lng: 127.109609,
  });

  useEffect(() => {
    if (window && window.naver) {
      const map = getNaverMap();
      mapRef.current = map;
      getMarker(map);
      return;
    }
  }, []);

  const mapRef = useRef<naver.maps.Map | null>(null);

  const getNaverMap = () => {
    const mapOptions = {
      center: new naver.maps.LatLng(mapCenter.lat, mapCenter.lng),
      mapTypeControl: true,
      zoomControl: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.RIGHT_CENTER,
      },
      zoom: 16,
    };
    const map = new naver.maps.Map("map", mapOptions);
    return map;
  };

  const getMarker = (map: naver.maps.Map) => {
    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(37.5080966, 127.109609),
      map: map,
    });
  };

  return <div id="map" style={{ width: "100%", height: "100%" }}></div>;
};

export default Map;
