"use client";

export default function Nav() {
  const handleAlert = () => {
    alert("아직 제공하지 않는 기능입니다.");
  };

  return (
    <div>
      <nav className="bg-black text-white text-center p-0 font-bold">
        <ul className="flex justify-center gap-x-20 ">
          <li
            onClick={handleAlert}
            className="cursor-pointer hover:bg-slate-700 inline-block p-3"
          >
            길안내
          </li>
          <li
            onClick={handleAlert}
            className="cursor-pointer hover:bg-slate-700 block p-3"
          >
            공유
          </li>
        </ul>
      </nav>
    </div>
  );
}
