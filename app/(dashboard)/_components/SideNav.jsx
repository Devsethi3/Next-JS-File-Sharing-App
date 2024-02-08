"use client";
import { File, Search, Shield, Upload } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const SideNav = () => {
  const menuList = [
    {
      id: 1,
      name: "Upload",
      icon: Upload,
      path: "/upload",
    },
    {
      id: 2,
      name: "Files",
      icon: File,
      path: "/files",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div>
        <div className="p-5 border-b-2 border-r-2">
          <Image src="/images/logo.svg" alt="Logo" width={150} height={150} />
        </div>
        <div className="flex border-r-2 h-screen flex-col items-start">
          {menuList.map((item, index) => (
            <Link
              href={item.path}
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex gap-4 pl-5 p-4 px-0 hover:bg-gray-100 w-full ${
                activeIndex === index ? "bg-[#f1fffb] text-primary" : null
              }`}
            >
              <item.icon />
              <h2>{item.name}</h2>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideNav;
