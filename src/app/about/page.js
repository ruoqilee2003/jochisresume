"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import AvatarImg from "@/image/prof.png";
import Photo1 from "@/image/photo1.png";
import Photo2 from "@/image/photo2.png";
import Photo3 from "@/image/photo3.png";
import Photo4 from "@/image/photo4.png";
import Photo5 from "@/image/photo5.png";
import Photo6 from "@/image/photo6.png";

const fakeImages = [Photo1, Photo2, Photo3, Photo4, Photo5, Photo6];

const experiences = [
  { year: "2024 - 2025", title: "YOUNG善青年營隊", job: "志工" },
  { year: "2023 - 2024", title: "台灣公共行政與公共事務系所聯合會 研討會籌備小組", job: "公關組組長" },
  { year: "2023 - 2024", title: "國立政治大學 華夏國樂社", job: "美宣" },
  { year: "2023 - 2023", title: "公部門見習計劃 調查局兩岸研析處", job: "見習生" },
  { year: "2023 - 2024", title: "大專生育成計畫營隊", job: "志工" },
  { year: "2023 - 2024", title: "國立政治大學 公共行政學系系學會", job: "監委" },
  { year: "2022 - 2022", title: "希望部落偏鄉孩童數位學伴計畫", job: "大學伴" },
  { year: "2022 - 2023", title: "國立政治大學 華夏國樂社", job: "社長" },
  { year: "2022 - 2023", title: "國立政治大學 公共行政學系系學會", job: "美宣" },
  { year: "2022 - 2023", title: "國立政治大學 政職涯團隊", job: "行銷組組員" },
  { year: "2022 - 2023", title: "國立政治大學 中崙高中校友會", job: "美宣" },
  { year: "2022 - 2022", title: "雁行協會 雁行學堂", job: "活動總監" },
  { year: "2021 - 2025", title: "國立政治大學 公共行政學系系辦公室", job: "工讀生" },
];

const awards = [
  { year: "2024", award: "大專學生研究計劃創作獎" },
  { year: "2024", award: "春城舊夢-五校國樂聯合音樂會" },
  { year: "2023", award: "飛鳶盃公共事務個案競賽" },
  { year: "2022", award: "張金鑑行政學術獎獎學金" },
  { year: "2021", award: "國立政治大學社會科學學院書卷獎" },
];

export default function About() {
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const photoInterval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % fakeImages.length);
    }, 4000);
    return () => clearInterval(photoInterval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const container = scrollRef.current;
      if (container) {
        const { scrollTop, scrollHeight, clientHeight } = container;
        if (scrollTop + clientHeight >= scrollHeight - 5) {
          container.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ top: 80, behavior: "smooth" });
        }
      }
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-start bg-white/80 backdrop-blur-md px-6 py-12 rounded-2xl max-w-[1600px] mx-auto text-[17px] leading-relaxed">
      {/* 上方：頭像與簡介 */}
      <div className="w-full pb-6 mb-5 flex flex-col md:flex-row items-start md:items-center gap-8">
        <Image src={AvatarImg} alt="avatar" width={150} height={150} className="rounded-full shadow-xl" />
        <div className="flex flex-col justify-center">
          <h1 className="max-w-[1600px] text-4xl font-extrabold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent mb-7">ABOUT ME</h1>
          <p className="max-w-[1600px] text-lg text-gray-800 mb-1">嗨！我是若綺，是正在學習Web程式設計的學生～很開心認識你！😊</p>
          <p className="flex flex-wrap text-sm mt-1 text-gray-400 gap-x-3 max-w-[1600px]">
            <span>＃國立政治大學</span>
            <span>＃公共行政學系</span>
            <span>＃數位內容與科技學士學程</span>
          </p>
        </div>
      </div>
      
      {/* 分隔線 */}
      <div className="w-full h-[1px] shadow-sm bg-gradient-to-r from-black/10 to-transparent mb-7 mt-0" />

      {/* 中段：經歷與獲獎紀錄 */}
      <div className="w-full grid grid-cols-1 [@media(min-width:1511px)]:grid-cols-[7fr_3fr] gap-8 mt-5 mb-10">
      {/* 經歷區塊：精簡樣式、全自動無縫輪播、橘年紫職 */}
      <div className="flex flex-col h-[420px] overflow-hidden">
        <h2 className="text-xl font-semibold mb-7">經歷</h2>
        <div className="relative h-full w-full overflow-hidden">
          <motion.div
            animate={{ y: ["0%", "-50%"] }}
            transition={{
              duration: experiences.length * 2.5,
              ease: "linear",
              repeat: Infinity
            }}
            className="space-y-2"
            style={{ height: `${experiences.length * 80 * 2}px` }}
          >
            {[...experiences, ...experiences].map((item, i) => (
              <div key={i} className="px-4 py-2 bg-white shadow rounded-lg">
                <p className="text-base flex flex-wrap gap-x-3">
                  <span className="text-orange-500 min-w-[95px]">{item.year}</span>
                  <span className="text-gray-800">{item.title}</span>
                  <span className="text-gray-500">{item.job}</span>
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

        {/* 獲獎區塊，同樣高度 */}
        <div className="flex flex-col h-auto xl:h-[420px]">
          <h2 className="text-xl font-semibold mb-7">競賽／演出</h2>
          <div className="relative pl-8 space-y-4">
            <div className="absolute top-0 left-[6px] w-[2px] h-full bg-gradient-to-b from-orange-200 via-pink-200 to-purple-200" />
            {awards.map((item, i) => (
              <div key={i} className="relative pl-6">
                <span className="absolute left-[-9px] top-[6px] w-3 h-3 rounded-full bg-gradient-to-br from-orange-400 to-purple-500" />
                <p className="text-[18px] font-semibold bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent">{item.year}</p>
                <p className="ml-1">{item.award}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

     {/* 技能語言興趣區塊 */}
     <div className="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-10 gap-6 mb-10">
     {/* 技能 */}
      <div className="col-span-full md:col-span-5">
        <h2 className="text-xl font-semibold mb-3">技能</h2>
        <div className="grid grid-cols-2 gap-4">
          {/* 程式語言 */}
          <div>
            <h3 className="font-medium mb-1">程式語言</h3>
            <div className="flex flex-wrap gap-2">
              {["Python", "JavaScript", "HTML", "CSS"].map(skill => (
                <span key={skill} className="text-sm px-3 py-1 rounded-full border border-orange-300 bg-white shadow-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-600">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* 視覺設計 */}
          <div>
            <h3 className="font-medium mb-1">視覺設計</h3>
            <div className="flex flex-wrap gap-2">
              {["Figma", "Photoshop", "Illustrator", "Blender", "VUP", "Vroid"].map(skill => (
                <span key={skill} className="text-sm px-3 py-1 rounded-full border border-orange-300 bg-white shadow-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-600">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* 分析工具 */}
          <div>
            <h3 className="font-medium mb-1">分析工具</h3>
            <div className="flex flex-wrap gap-2">
              {["SPSS", "STATA"].map(skill => (
                <span key={skill} className="text-sm px-3 py-1 rounded-full border border-orange-300 bg-white shadow-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-600">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* 影像／遊戲 */}
          <div>
            <h3 className="font-medium mb-1">影像／遊戲</h3>
            <div className="flex flex-wrap gap-2">
              {["Unity", "Unreal", "PowerDirector"].map(skill => (
                <span key={skill} className="text-sm px-3 py-1 rounded-full border border-orange-300 bg-white shadow-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-600">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

        {/* 語言 */}
        <div className="col-span-full md:col-span-2">
          <h2 className="text-xl font-semibold mb-5">語言</h2>
          <ul className="space-y-4 text-[18px]">
            <li>中文<span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-600 text-[20px]"> ★★★★★</span></li>
            <li>英文<span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-600 text-[20px]"> ★★★★☆</span></li>
            <li>西文<span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-600 text-[20px]"> ★★☆☆☆</span></li>
            <li>德文<span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-600 text-[20px]"> ★★☆☆☆</span></li>
          </ul>
        </div>

        {/* 興趣 */}
        <div className="col-span-full md:col-span-2">
          <h2 className="text-xl font-semibold mb-5">興趣</h2>
          <ul className="space-y-4 text-[18px]">
            <li>🎨 平面設計、數位內容</li>
            <li>🎧 旅行、攝影</li>
            <li>🎤 各種音樂、KPOP、JPOP</li>
            <li>📋 公共政策、數位轉型</li>
          </ul>
        </div>
      </div>

{/* 輪播區塊 */}
<div className="w-full mt-4 mb-2">
  <h2 className="text-xl font-semibold mb-2">生活片段</h2>
  <div className="relative w-full max-w-[90%] mx-auto aspect-[16/5] flex items-center justify-center overflow-hidden rounded-2xl">
    {fakeImages.map((src, index) => {
      const total = fakeImages.length;
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 1000;
      const positions = isMobile ? [0] : [-2, -1, 0, 1, 2];
      const relativeIndex = (index - current + total) % total;

      let position = null;

      for (let offset of positions) {
        if ((current + offset + total) % total === index) {
          position = offset;
          break;
        }
      }

      if (position === null) return null;

      const scaleMap = isMobile
        ? { 0: 1.2 }
        : { 0: 1.25, 1: 1, "-1": 1, 2: 0.85, "-2": 0.85 };
      const opacityMap = isMobile
        ? { 0: 1 }
        : { 0: 1, 1: 0.6, "-1": 0.6, 2: 0.3, "-2": 0.3 };
      const translateX = isMobile ? 0 : position * 260;

      return (
        <motion.div
          key={index}
          animate={{
            x: translateX,
            scale: scaleMap[position],
            opacity: opacityMap[position],
            zIndex: position === 0 ? 10 : 5 - Math.abs(position),
          }}
          transition={{ duration: 0.5 }}
          className="absolute aspect-square w-[25%] max-w-[260px] flex-shrink-0 overflow-hidden rounded-2xl shadow-lg"
        >
          <div className="relative w-full h-full">
            <Image src={src} alt={`photo-${index}`} fill className="object-cover rounded-2xl" />
          </div>
        </motion.div>
      );
    })}
    <div className="absolute inset-y-0 left-0 flex items-center z-20">
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + fakeImages.length) % fakeImages.length)}
        className="px-3 py-2 m-2 rounded-full border-2 border-black bg-white text-black font-extrabold text-xl hover:bg-black hover:text-white active:scale-95 transition-all"
      >
        ←
      </button>
    </div>
    <div className="absolute inset-y-0 right-0 flex items-center z-20">
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % fakeImages.length)}
        className="px-3 py-2 m-2 rounded-full border-2 border-black bg-white text-black font-extrabold text-xl hover:bg-black hover:text-white active:scale-95 transition-all"
      >
        →
      </button>
    </div>
  </div>
</div>


      {/* 查看作品按鈕 */}
      <div className="mt-5 mb-4">
        <Link href="/post">
          <button className="group px-6 py-2 rounded-full border-2 border-black text-black bg-white font-semibold text-lg transition-all duration-300 hover:bg-black hover:text-white active:scale-95 flex items-center gap-2">
            View Works
            <span className="transition-transform group-hover:translate-x-1 text-xl font-bold group-hover:text-white">→</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
