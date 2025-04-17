"use client";

import Image from "next/image";
import Link from "next/link";

import Painting1 from "@/image/1.png";
import Painting2 from "@/image/2.png";
import Painting3 from "@/image/3.png";
import Painting4 from "@/image/4.png";

const sections = [
  {
    title: "Project",
    img: Painting1,
    class: "sm:col-span-2 h-70",
  },
  {
    title: "Art",
    img: Painting2,
    class: "sm:col-span-1 h-70",
  },
  {
    title: "Award",
    img: Painting3,
    class: "sm:col-span-1 h-70",
  },
  {
    title: "Photography",
    img: Painting4,
    class: "sm:col-span-2 h-70",
  },
];

export default function Work() {
  return (
    <div className="w-full h-full bg-white flex flex-col justify-start items-center rounded-2xl py-10 px-6">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent w-full text-left mb-5">
        MY WORKS
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-h-[85vh] overflow-y-auto">
        {sections.map((sec, idx) => (
          <Link key={idx} href="/post">
            <div
              className={`relative rounded-2xl overflow-hidden group ${sec.class} cursor-pointer shadow-md active:scale-95 transition-transform duration-200`}
            >
              {/* 圖片層 */}
              <Image
                src={sec.img}
                alt={sec.title}
                fill
                sizes="100%"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* 漸層遮罩層 */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/50 via-pink-500/40 to-purple-600/30 opacity-0 group-hover:opacity-100 transition duration-300"></div>

              {/* 標題文字 */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-white text-2xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
                  {sec.title}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* 查看作品按鈕 */}
      <div className="mt-6 mb-4">
        <Link href="/journey">
          <button className="group px-6 py-2 mt-6 mb-4 rounded-full border-2 border-black text-black bg-white font-semibold text-lg transition-all duration-300 hover:bg-black hover:text-white active:scale-95 flex items-center gap-2">
            View Journey
            <span className="transition-transform group-hover:translate-x-1 text-xl font-bold group-hover:text-white">
              →
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
