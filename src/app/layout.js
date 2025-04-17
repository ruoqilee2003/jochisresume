import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import AvatarImg from "@/../public/avatar.png";
import Link from "next/link";
import NavButtons from "./components/NavButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "李若綺的數位履歷",
  description: "Web程式設計期中作業嗯嗯嗯",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          backgroundImage: "url('/profile.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="min-h-screen w-full flex flex-col sm:flex-row items-stretch gap-5 bg-transparent p-8">

          {/* 左側側欄 */}
          <div className="min-w-[280px] w-full sm:w-[300px] rounded-2xl bg-white backdrop-blur-md flex 
          justify-start items-center flex-col p-[30px] pt-[70px] overflow-x-hidden shadow-2xl">

            {/* 頭像 */}
            <Link href="/">
              <Image
                src={AvatarImg}
                alt="avatar"
                width={80}
                height={80}
                className="rounded-full mb-4 cursor-pointer"
              />
            </Link>

            <h1 className="mt-2 font-bold text-lg mb-1">ㄚㄑ</h1>
            <p className="text-sm text-gray-600 text-center">Stay hungry, Stay foolish.</p>

            {/* 社群 icon */}
            <div className="flex gap-2 my-4">
              {[
                { normal: "/image/ig.png", hover: "/image/ig-hover.png", link: "https://www.instagram.com/ruoqilee2003/" },
                { normal: "/image/fb.png", hover: "/image/fb-hover.png", link: "https://www.facebook.com/profile.php?id=100002991025674" },
                { normal: "/image/mail.png", hover: "/image/mail-hover.png", link: "mailto:lee031337@gmail.com" },
                { normal: "/image/line.png", hover: "/image/line-hover.png", link: "https://line.me/" },
              ].map((item, i) => (
                <a key={i} href={item.link} target="_blank" rel="noopener noreferrer">
                  <div className="relative w-[32px] h-[32px]">
                    <Image
                      src={item.normal}
                      alt="icon"
                      fill
                      className="absolute object-contain transition-opacity duration-300 hover:opacity-0"
                    />
                    <Image
                      src={item.hover}
                      alt="icon-hover"
                      fill
                      className="absolute object-contain opacity-0 transition-opacity duration-300 hover:opacity-100"
                    />
                  </div>
                </a>
              ))}
            </div>

            {/* 導覽按鈕元件 */}
            <NavButtons />
          </div>

          {/* 右側內容區 */}
          <div className="flex-1 w-full rounded-2xl bg-white p-6 shadow-xl overflow-y-auto">
            {children}
          </div>

        </div>
      </body>
    </html>
  );
}
