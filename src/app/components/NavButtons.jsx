"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "WORKS", href: "/post" },
  { label: "JOURNEY", href: "/journey" },
];

export default function NavButtons() {
  const pathname = usePathname();

  return (
    <div className="w-full flex flex-col gap-4 text-base font-semibold mt-2">
      {navItems.map((item, i) => {
        const isActive = pathname === item.href;

        return (
          <Link key={i} href={item.href}>
            <div
              className={`w-full py-5 rounded-xl text-center transition-all duration-300 border-2 ${
                isActive
                  ? "bg-black text-white border-black"
                  : "border-black text-black hover:bg-black hover:text-white"
              }`}
            >
              {item.label}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
