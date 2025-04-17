"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AvatarImg from "@/image/avatar.png";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
const texts = ["Hi, I'm JOCHI", "Welcome to my site!"];

const [index, setIndex] = useState(0);
const [displayText, setDisplayText] = useState("");
const [showContent, setShowContent] = useState(false);
const [showButton, setShowButton] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => setShowContent(true), 1000);
  return () => clearTimeout(timer);
}, []);

useEffect(() => {
  if (!showContent) return;

  let i = 0;
  const type = () => {
    if (i <= texts[index].length) {
      setDisplayText(texts[index].slice(0, i));
      i++;
      setTimeout(type, 80);
    } else if (index < texts.length - 1) {
      setTimeout(() => setIndex((prev) => prev + 1), 1000); // 換下一句
    } else if (texts[index] === "Welcome to my site!") {
      setTimeout(() => setShowButton(true), 500); // 最後一段打完顯示按鈕
    }
  };

  const delay = setTimeout(type, 300);
  return () => clearTimeout(delay);
}, [index, showContent]);

  return (
    <div className="relative w-full h-full bg-white overflow-hidden rounded-2xl">

      {/* ⛳ 左右滑開動畫 */}
      {!showContent && (
        <>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute top-0 left-0 h-full w-1/2 bg-white z-50"
          />
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute top-0 right-0 h-full w-1/2 bg-white z-50"
          />
        </>
      )}

      {/* 主要內容區塊 */}
      {showContent && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center items-center w-full h-full rounded-2xl bg-white/70 text-black backdrop-blur-md shadow-xl relative z-10"
        >
          <Image
            src={AvatarImg}
            alt="avatar"
            width={100}
            height={100}
            className="rounded-full object-cover mb-6 shadow-lg"
          />
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-600 min-h-[48px]">
            {displayText}
          </h1>
          <p className="mt-4 text-gray-700 text-sm">Click for more information...✨</p>

          {/* About Me 按鈕（預留空間 + 浮現動畫） */}
          <div className="mt-10 min-h-[60px] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={showButton ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {showButton && (
                <Link href="/about">
                  <button className="group px-6 py-2 rounded-full border-2 border-black text-black bg-white font-semibold text-lg transition-all duration-300 hover:bg-black hover:text-white active:scale-95 flex items-center gap-2">
                    About Me
                    <span className="transition-transform group-hover:translate-x-1 text-xl font-bold group-hover:text-white">
                      →
                    </span>
                  </button>
                </Link>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
