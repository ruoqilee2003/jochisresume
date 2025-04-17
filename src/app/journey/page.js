"use client";

import diary from "@/diary.json";
import Link from "next/link";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Diary() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex-1 flex flex-col items-center justify-start bg-white/80 backdrop-blur-md p-10 rounded-2xl max-w-[1600px] px-6 mx-auto text-lg">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent w-full text-left mb-7">
        MY JOURNEY
      </h1>

      <div className="flex flex-col gap-6 w-full">
      {diary.map((entry, i) => (
      <div
        key={i}
        className="relative bg-white rounded-2xl shadow-xl p-6 border border-gray-200 transition hover:shadow-2xl"
      >
        {/* 日期與運動量（上方，600px 以上顯示） */}
        <div className="hidden min-[600px]:flex flex-row justify-between items-center mb-2">
          <span className="text-sm text-gray-500 font-mono">{entry.date}</span>
          <span className="text-sm bg-gradient-to-r from-orange-200 to-purple-200 px-3 py-1 rounded-full font-medium whitespace-nowrap">
            {entry.exercise}
          </span>
        </div>

        {/* 標題 */}
        <h2 className="text-xl font-semibold mb-2">{entry.title}</h2>

        {/* 預覽內容 */}
        <p className="text-gray-700 leading-relaxed line-clamp-2 whitespace-pre-line">
          {entry.content.split("\n")[0]}
        </p>

        {/* 展開內容 */}
        <AnimatePresence>
          {openIndex === i && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="text-gray-700 mt-4 overflow-hidden whitespace-pre-line"
            >
              {entry.content.split("\n").slice(1).join("\n")}
            </motion.p>
          )}
        </AnimatePresence>

        {/* 日期與運動量（底部，600px 以下顯示） */}
        <div className="hidden max-[599px]:flex flex-col mt-4 gap-1">
          <span className="text-sm text-gray-500 font-mono">{entry.date}</span>
          <span className="text-sm bg-gradient-to-r from-orange-200 to-purple-200 px-3 py-1 rounded-full font-medium w-fit">
            {entry.exercise}
          </span>
        </div>

        {/* 閱讀更多箭頭按鈕（右下角圓形 icon） */}
        <button
          onClick={() => toggleOpen(i)}
          className="absolute bottom-4 right-4 bg-gray-100 hover:bg-gray-200 active:scale-95 transition p-2 rounded-full shadow-sm"
        >
          <img
            src={openIndex === i ? "/arrow-u.png" : "/arrow-d.png"}
            alt="Toggle arrow"
            className="w-4 h-4"
          />
        </button>
      </div>
    ))}

      </div>
              <Link href="/">
                <button className="group px-6 py-2 mt-10 mb-4 rounded-full border-2 border-black text-black bg-white font-semibold text-lg transition-all duration-300 hover:bg-black hover:text-white active:scale-95 flex items-center gap-2">
                  Back to Main
                  <span className="transition-transform group-hover:translate-x-1 text-xl font-bold group-hover:text-white">
                    →
                  </span>
                </button>
              </Link>
    </div>
    
  );
}
