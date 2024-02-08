import { X } from "lucide-react";
import Image from "next/image";

const FilePreview = ({ file, removeFile }) => {
  return (
    <>
      <div className="flex items-center justify-between mt-5 bg-[#ecfff9] p-4 border-[1px] rounded-md border-primary">
        <div className="flex gap-5 items-center">
          <Image src="/images/file.png" width={50} height={50} />
          <div className="flex flex-col items-start">
            <h2 className="text-[1.2rem] text-gray-800 font-medium">
              {file.name}
            </h2>
            <h5 className="text-sm opacity-75">
              {file?.type} / {(file.size / 1024 / 1024).toFixed(2)}MB
            </h5>
          </div>
        </div>
        <X
          className="text-red-600 cursor-pointer"
          onClick={() => removeFile()}
        />
      </div>
    </>
  );
};

export default FilePreview;
