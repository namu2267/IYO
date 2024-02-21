# IYO

## 💡 프로젝트 정보

1. 프로젝트 명 : IYO
2. 프로젝트 기간 : 2024. 1. 6. ~ 2024. 2. 18.
3. 프로젝트 참가 인원: 2명
   (프론트엔드 1명, 백엔드 1명)
4. 협업툴: ![Notion Badge](https://img.shields.io/badge/Notion-000?logo=notion&logoColor=fff&style=plastic) ![Discord Badge](https://img.shields.io/badge/Discord-5865F2?logo=discord&logoColor=fff&style=plastic)
5. 배포툴: ![Vercel Badge](https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=fff&style=plastic)

<br />

---

## 👀 프로젝트 배경

> 평소 여러 동네를 구경다니고, 소품샵에 가는 것을 좋아한다. <br>
> 이런 정보만을 담고 있는 사이트가 있으면 좋을 것 같은데 생각보다 정보를 찾기가 쉽지 않았다. 인터넷에는 정보들이 넘쳐나지만 소품샵에 대한 정보를 얻기 위해서는 그 정보의 조각들을 모아야 했다. 그래서 생각난 프로젝트가 바로 소품샵 사이트 IYO이다! <br> 페르소나는 나 자신 + 소품에 조금 더 관심이 많은 사람으로 기획하였고, 해당 사이트에 정보를 넣기 위해서 직접 소품샵에 방문하여 소품에 대한 소개문도 작성하였다.
> 이 페이지에서 쓰이는 사진은 업체제공사진과 내가 직접 찍은 사진들이다.<br> 대략적인 기획 후에는 Figma를 통해 UI를 만들었다. 이렇게 만든 UI를 바탕으로 next.js로 작업하였다.<br>
> 낮에는 시간이 나지 않아, 주로 저녁시간과 주말을 이용하여 작업하였다.

## <br />

## ✔️ 본 프로젝트에서 내가 지향한 것

> next.js를 제대로 이해하고 사용하고 싶었다. <br>
> 따라서 최대한 page.tsx에서는 'use client'를 사용하지 않도록 노력했다. next.js의 최대 장점 중 하나가 바로 SEO라고 생각하기 때문에 그 장점을 최대한 살리는 방향으로 코드를 짜고자 했다. 유저의 이벤트가 발생하는 부분만 컴포넌트로 빼서 CSR이 이루어지게 했고, 정적으로 정보를 표현하는 부분들은 SSR이 이루어지도록 했다.

## <br />

## ▶️ 실행 방법

```shell
# 프론트엔드 (node version v21.6.0 사용 중)
$ git clone https://github.com/namu2267/IYO.git
$ cd iyo
$ npm install
$ npm run dev

```

## ▶️ 서버가 부재할 경우를 대비한 백엔드 실행방법

```shell
# 백엔드 (node version v21.6.0 사용 중)
$ git clone https://github.com/hjpark625/iyo-backend.git
$ cd iyo-backend
$ npm install
$ nvm use
$ pnpm run start:dev

```

<br />

---

## ⭐ 배포 링크

<br/>

> https://iyo.vercel.app/

<br/>

---

## 📚 사용 기술 스택

<br />

![react](https://img.shields.io/badge/react-18.2.0-61DAFB?logo=react)
![next.js](https://img.shields.io/badge/next.js-14.0.4-000000?logo=nextdotjs)  
![typescript](https://img.shields.io/badge/typescript-5.3.3-3178C6?logo=typescript)
![tailwind](https://img.shields.io/badge/tailwindcss-3.3.0-0F172A?&logo=tailwindcss)

### **선정 이유**

#### ![](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)

1. 서버사이드 렌더링(SSR)과 클라이언트사이드 렌더링(CSR)을 모두 사용함으로써 각각의 장점을 취할 수 있다.

- _SSR_

  - <b>초기 로딩 속도의 증가</b>: CSR과 비교하여 빠른 초기 로딩속도
  - <b>SEO최적화</b>: CSR처럼 root를 통해 Javascript를 주입하는 것이 아니라, HTML파일로 직접 전달하기 때문에 검색엔진이 접근가능한 구조

- _CSR_
  - 필요한 부분만 CSR방식으로 컴포넌트화 가능
  - 유저의 이벤트가 발생하는 부분만 CSR을 사용하여 빠른 로딩을 통한 더 나은 UX제공 가능

2. App라우터

- React-Router-dom라이브러리의 설치 불필요. <br>
  next.js안에 내장되어있는 App라우터를 통하여 <b>폴더구조만으로 라우팅 실현 가능</b>

3. Image Optimization

- _자체내장된 `<Image />` 태그를 통해서 이미지 최적화_
  - <b>WebP 및 AVIF사용</b>: WebP 및 AVIF와 같은 최신 이미지 형식을 사용하여 각 장치에 올바른 크기의 이미지를 자동으로 제공
  - <b>Lazy로딩</b>:  브라우저 지연 로딩을 사용하여 뷰포트에 들어갈 때만 로드

<br>

![](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)

1. 동적으로 타입이 지정되는 JavaScript를 보완
2. 컴파일 단계의 에러뿐만 아니라, 의도하지 않은 타입으로 변환되는 것을 사전에 방지

<br>

![](https://img.shields.io/badge/tailwindcss-0F172A?&logo=tailwindcss)

1. 스타일 일관성

- 지정된 스타일을 통해 프로젝트 전반의 스타일에 일관성 부여

2. 클래스명의 일관성

- 지정된 클래스명을 통해 클래스명만으로도 어떤 스타일을 부여한 것인지 추론 가능
- 클래스명을 일일이 부여하지 않아도 됨

3. CSS ↔️ HTML 사이의 컨텍스트 전환의 용이

- css파일 혹은 `<style>`블록으로의 전환이 필요없음

<br>

---

## 📁 폴더 구조

    root
    |-- tsconfig.json
    |-- README.md
    |-- package.json
    |-- package.lock.json
    |-- next.config.json
    |-- tailwind.config.json
    |-- postcss.config.json
    |-- eslintrc.json
    |-- gitignore
    |-- public
        |-- assets
        |-- fonts
    |-- src
        |-- app
           |-- detail
               |-- [storename]
                   |-- @detail
                        |-- default.tsx
                        |-- page.tsx
                   |-- @summary
                        |-- default.tsx
                        |-- page.tsx
                   |-- default.tsx
                   |-- layout.tsx
                   |-- page.tsx
           |-- summary
               |-- [storename]
                   |-- page.tsx
               |-- layout.tsx
           |-- globals.css
           |-- layout.tsx
           |-- not-found.tsx
           |-- page.tsx
        |-- components
           |-- naverMap
               |-- Map.tsx
           |-- summary
               |-- Nav.tsx

 <br />

---

##🌚 .env

```
NEXT_PUBLIC_NAVER_API_KEY=발급받은 개인 naverAPI KEY
```

<br>

---

## 🖥️ 구현 기능

### 네이버Map API를 활용한 지도기능

#### 1. `mapOptions`를 통한 customized된 지도의 활용

```typescript
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
```

- `mapCenter`의 초기값을 지정하여 첫 화면에 항상 송리단길이 뜨도록 했다.
- `zoomControl`을 true로 지정하여 화면에 유저가 직접 줌 레벨을 컨트롤할 수 있는 컨트롤러를 띄운다.
- `zoomControlOptions`로 줌 컨트롤러의 세부적인 옵션을 지정한다. 줌 컨트롤러의 사이즈는 small, 위치는 오른쪽 센터로 한다.
- `zoom`:16을 통해서 초기의 룸 레벨을 16으로 지정했다.
  <br>

#### 2. `naver.maps.Marker`를 이용한 원하는 소품샵의 마커만들기

- 원하는 위치에 마커를 생성하기 위해 `naver.maps.Marker`클래스 객체를 생성한다.

```typescript
const getMarker = (map: naver.maps.Map, pos: { lat: number; lng: number }) => {
  const marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(pos.lat, pos.lng),
    map,
  });
  return marker;
};
```

- 소품샵의 데이터를 `fetch()`를 통해 서버에서 받아온다. <br>
  ("Access-Control-Allow-Origin"은 cors에러로 인해 임시적으로 지정하였다)

```typescript
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
```

<br>

#### 3. User가 클릭한 마커의 Summary페이지로 이동하기

- javascript의 `addEventListener`의 click이벤트를 이용하여 해당 유저가 해당 마커를 클릭하였을 때 summary의 해당 소품샵으로 이동한다.
- next.js의 client side 화면이동시 필요한 `useRouter`를 사용하여, /summary/pin.engName 페이지로 이동한다.

```typescript
useEffect(() => {
  pinsData.forEach((pin) => {
    if (mapRef.current == null) return;
    const marker = getMarker(mapRef.current, pin);
    marker.addListener("click", () => {
      router.push(`/summary/${pin.engName}`);
    });
  });
}, [pinsData]);
```

<br>

#### 💡 `useEffect`의 사용

- <b>지도API, pin데이터API의 호출은 한번만</b>: <br> useEffect훅을 사용하여, naverMap의 호출과 pinData를 호출하는 함수를 브라우저 첫 렌더링시에만 일어나게 한다.
- <b>marker API의 호출은 첫렌더링시&pin데이터 변경시에</b>: <br> useEffect훅을 사용하여, 첫 화면렌더링시 그리고 pinsData에 변화가 있을때만 getMarker()를 통해 마커를 변경하도록 한다.

<br>
<br>

### next.js의 폴더구조를 통한 라우팅

#### 1. `parallel routes`를 통한 병렬라우팅 구현

- next.js의 @를 이용하여 <u>2개의 다른 페이지를 한 화면에서 볼 수 있도록</u> parallel 라우팅을 구현하였다.

  <img width="262" alt="스크린샷 2024-02-19 오후 7 32 04" src="https://github.com/namu2267/IYO/assets/104307414/849e809c-195b-4c61-9bd4-8ceffad3fde7">

![@@](https://github.com/namu2267/IYO/assets/104307414/e254a762-e62e-44ca-aa31-8a9b3d5b942d)
<br>

- parallel routes는 fallback이 발생하여 404에러가 뜰 수 있으므로 default.tsx를 만들어 이를 해결하였다.

- <i>(처음에는 3중중첩라우팅을 하였으나 새로고침시에 fallback으로 빠지는 오류가 발생하여 위와 같은 방식으로 바꾸게 되었다. next.js의 폴더구조에 대한 이해부족을 원인으로 생각하여 더 공부한 뒤, 추후에 다른 방식을 더 생각해 볼 예정이다.)</i>

<br>

#### 2.`[slug]`통한 Dynamic Routes 구현

- next.js의 [slug]를 이용하여 파라미터를 동적으로 라우팅한다.
  <img width="232" alt="스크린샷 2024-02-19 오후 7 50 48" src="https://github.com/namu2267/IYO/assets/104307414/5988999b-1c5e-4be1-950c-6fe56524047e">

<br>

### next.js `<Image>`태그를 통한 이미지 최적화

1. `Webp`로 자동변환 ➡️ 메모리 절약

- next.js는 자동으로 이미지를 webp처럼 용량이 작은 파일로 변환해준다. AWS의 용량문제로 이미 webp로 변환하여 올렸지만, 추후에 jpg나 png이미지를 사용할 일이 있을 것이라 생각하였다.

2. 이미지 `사이즈 최적화`

- next.js의 <Image/>는 디바이스 크기에 따른 srcSet을 제공하여, 사용자의 디바이스에 맞는 이미지를 다운로드한다. (디바이스에 맞는 이미지 사이즈를 만들고나서 webp로 변환환다.) <br> ➡️ 이를 통해 불필요하게 큰 이미지를 다운로드하는 것을 방지할 수 있다.

3. `lazy loading`

- detail 페이지에는 많은 이미지를 포함하고 있기 때문에 lazy loading을 통해서 필요한 부분의 이미지만을 로딩한다.

4. `priority`

- summary 페이지의 메인이미지는 유저가 누르면 바로 보여야 하기 때문에 lazy loading이 되면 안된다. 따라서 이 기능을 끄기 위해서 속성에 priority를 부여하였다.

```typescript
<div className="relative w-full h-96">
  <Image
    key={storeData.storeImages[0].photoId}
    src={storeData.storeImages[0].file_path}
    alt={storeData.engName + "메인사진"}
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    style={{ objectFit: "cover" }}
    priority={true}
  />
</div>
```

<br>
<br>

### `params`를 통해 파라미터에 접근, 서버 API받아오기

- url파라미터에 동적으로 접근하기 위해서 params를 사용하였다.
- 이렇게 얻은 파라미터를 이용하여 서버에서 API를 받아온다.
- page자체가 서버사이드 렌더링 방식이기때문에 받아올 때는 `fetch()`함수를 이용하였다.
- next.js의 page.tsx는 컴포넌트 자체에 `async`를 걸 수 있기 때문에 fetch()를 받아올 때 <u>useEffect를 사용하지 않고</u> 바로 `await`를 사용하였다.

```typescript
const Page = async ({ params }: { params?: { storename: string } }) => {
  const storeParams = params?.storename;

  const res = await fetch(`https://new-todos.site/detail/${storeParams}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

  const { data } = await res.json();
  const storeData = data as MainDB;
};
```

<br>

---

## 이 프로젝트에서 가장 어려웠던 점

### Next.js의 폴더구조를 이용한 중첩라우팅

- Next.js의 폴더구조를 이용한 중첩라우팅은 이 프로젝트에서 추구하는점임과 동시에, 가장 어려운 지점이었다. Map페이지와 Summary, Detail 페이지를 parallel routes를 통해서 <u>3중으로 중첩되게</u> 하면서도 <u>url에 따라서 동적으로 변화하게</u> 하려고 하다보니 <b>폴더구조가 엄청 복잡해졌다.</b> Next.js의 `parallel routes`는 새로고침시 `fallback`이 발생시키기 때문에 `default.tsx`를 통해서아래와 같이 폴더구조를 짰을 때 이를 처리해야하는데 막히는 부분이 발생했다. 처음 화면은 잘나오는데 새로고침시 404가 뜨는 에러가 발생했다. 첫화면 렌더링도 잘되고 라우팅도 잘되고 거의 다 잘됐었는데 한 부분에서만 404가 발생했다.
  <img width="539" alt="스크린샷 2024-02-15 오후 4 34 47" src="https://github.com/namu2267/IYO/assets/104307414/34b3f4e5-a884-4497-a039-8a899003737d">
  거의 다 온 것같은데 방식을 바꿔야해서 개인적으로 너무 아쉬웠다.

- 모달을 이용하여 처리하는 방법을 생각했으나, 그 방식을 이용하기 위해서는 `useState`를 사용해야했다. 이것은 `‘use client’`를 통한 `CSR`페이지로의 전환을 의미했다. 따라서 그것을 피하기 위해서 현재와 같은 폴더 구조로 만들었다. 배포일을 설정해뒀기때문에 그 전까지 내가 할 수 있는 한에서 (CSR페이지로 만들지 않으면서) 최선의 구조가 지금의 폴더 구조였다.

- 이때 고민했던 점은 Summary페이지와 Deatail페이지를 모달을 통한 CSR페이지를 만들고, SEO가 가능하면서 url로도 접근이 가능한 SSR페이지도 만드는 것이었다. 이렇게 하면 각각 Summary, Detail은 CSR, SSR 2개의 페이지를 가지게 된다.
  이 방식이 지금의 방법보다 더 좋은 방법일 수도 있다. Next.js의 parallel routes에 대한 이해부족을 원인으로 생각하여 이 부분에 대해서 더 공부할 예정이다. 또한 코드의 리팩토링을 진행하면서 더 나은 방법을 찾으면 구조를 변경할 것이다.

## <br>

## 시연영상

![IYO 화면기록 read](https://github.com/namu2267/IYO/assets/104307414/8bbf4f2c-3bde-4c81-86d3-cd8426a14b43)

## <br>

## 🚀 추후 일정

vercel로 배포를 완료했지만 더 추가하고 싶은 기능들이 있고, 디자인적으로도 더 보완이 필요하다. <br> 특히, meta태그, robust.txt를 활용하여 SEO에 최적화시키고 싶다. <br> IYO프로젝트는 CICD를 통해서 develop해 나갈 예정이다.
