"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AvatarImg from "@/image/avatar.png";

const worksData = [
  {
    name: "織音縫時",
    category: "DESIGN",
    date: "2025-03-12",
    image: "01.png",
  },
  {
    name: "雲湧樂尋",
    category: "DESIGN",
    date: "2025-02-22",
    image: "02.png",
  },
  {
    name: "Memento",
    category: "PROJECT",
    date: "2025-03-12",
    image: "memento.png",
  },
  {
    name: "PickyTix",
    category: "PROJECT",
    date: "2025-03-12",
    image: "icon.png",
  },
  {
    name: "我的潮崙",
    category: "DIGITAL ART",
    date: "2025-01-15",
    image: "05.png",
  },
  {
    name: "UNTITLED",
    category: "DIGITAL ART",
    date: "2025-01-15",
    image: "06.png",
  },
  {
    name: "NFT CUBES",
    category: "PROJECT",
    date: "2025-01-15",
    image: "09.png",
  },
];

const categories = ["ALL", "DESIGN", "DIGITAL ART", "PROJECT"];

export default function Others() {
  const [selected, setSelected] = useState("ALL");
  const [modalWork, setModalWork] = useState(null);
  const [likedWorks, setLikedWorks] = useState({});

  const filteredWorks =
    selected === "ALL"
      ? worksData
      : worksData.filter((w) => w.category === selected);

  const getImagePath = (filename) => require(`@/image/${filename}`);

  const toggleLike = (workName) => {
    setLikedWorks((prev) => ({
      ...prev,
      [workName]: !prev[workName],
    }));
  };

  return (
    <div className="relative w-full min-h-screen bg-white text-black flex flex-col items-center">
      {/* Profile */}
      <div className="flex flex-col items-center pt-10 w-full">
        <Image
          src={AvatarImg}
          alt="avatar"
          width={80}
          height={80}
          className="rounded-full border shadow-md" 
          onClick={() => setSelected("ALL")}
        />
        <div className="text-2xl font-bold mt-5">@JOCHI</div>
        <div className="w-full h-[1px] shadow-sm bg-gradient-to-r from-black/10 to-transparent mb-6 mt-10" />
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 px-4 py-6 mb-5">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
              selected === cat
                ? "bg-gradient-to-r from-pink-400 to-yellow-400 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setSelected(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Works Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 pb-12 max-w-[1800px] w-full">
        {filteredWorks.map((work, index) => (
          <div
            key={index}
            className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 hover:shadow-xl aspect-square"
            onClick={() => setModalWork(work)}
          >
            <Image
              src={getImagePath(work.image)}
              alt={work.name}
              fill
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-3 left-3 bg-white/90 text-black px-3 py-1 text-sm font-medium rounded-full shadow-md backdrop-blur-sm transition-opacity duration-200 opacity-100 group-hover:opacity-100 hidden xl:block">
  {work.name}
    </div>
    <div className="absolute bottom-3 right-3">
      <Image
        src={likedWorks[work.name] ? getImagePath("click.png") : getImagePath("heart.png")}
        alt="heart"
        width={20}
        height={20}
        onClick={(e) => {
          e.stopPropagation();
          toggleLike(work.name);
        }}
        className="cursor-pointer hover:scale-110 transition"
      />
    </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalWork && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl w-[90%] max-w-lg md:max-w-md relative shadow-2xl">
            <button
              className="absolute -top-6 right-0 translate-x-6 w-10 h-10 rounded-full bg-white shadow-md border border-black text-xl font-bold flex items-center justify-center hover:bg-black hover:text-white transition"
              onClick={() => setModalWork(null)}
            >
              ×
            </button>

            <Image
              src={getImagePath(modalWork.image)}
              alt={modalWork.name}
              width={600}
              height={400}
              className="rounded-lg object-cover mb-4"
            />
            <div className="flex items-center justify-between mb-2">
  <h2 className="text-xl font-bold">{modalWork.name}</h2>
</div>
<p className="text-gray-600 text-sm mb-3">{modalWork.date}</p>

            <div className="flex justify-end items-start mb-3">
  <button onClick={() => toggleLike(modalWork.name)}>
    <Image
      src={
        likedWorks[modalWork.name]
          ? getImagePath("click.png")
          : getImagePath("heart.png")
      }
      alt="heart"
      width={28}
      height={28}
      className="transition-transform duration-200 hover:scale-110"
    />
  </button>
</div>
          </div>
        </div>
      )}
              <Link href="/journey">
                <button className="group px-6 py-2 mt-3 mb-4 rounded-full border-2 border-black text-black bg-white font-semibold text-lg transition-all duration-300 hover:bg-black hover:text-white active:scale-95 flex items-center gap-2">
                  View Journey
                  <span className="transition-transform group-hover:translate-x-1 text-xl font-bold group-hover:text-white">
                    →
                  </span>
                </button>
              </Link>
    </div>
    
  );
}
