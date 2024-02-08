import { UserButton } from "@clerk/nextjs";
import { AlignJustify } from "lucide-react";
import Image from "next/image";

const TopHeader = () => {
  return (
    <>
      <div className="flex border-b-2 p-5 items-center justify-between md:justify-end">
        <AlignJustify className="md:hidden" />
        <Image
          className="mr-10"
          src="/images/logo.svg"
          alt="Logo"
          width={150}
          height={150}
        />
        <UserButton />
      </div>
    </>
  );
};

export default TopHeader;
