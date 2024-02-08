"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const FileInfo = ({ file }) => {
  const [fileType, setFileType] = useState();

  useEffect(() => {
    if (file) {
      setFileType(file.fileType.split("/")[0]);
    }
  }, [file]);

  return (
    file && (
      <>
        <div className="border-2 flex rounded-md items-center justify-center">
          <div className="flex flex-col gap-5">
            <Image
              src={
                fileType == "image"
                  ? file?.fileURL
                  : "/images/image-preview.png"
              }
              alt="file-preview"
              width={300}
              height={300}
              className="rounded-sm object-cover"
            />
            <div className="flex flex-col gap-1 items-center justify-center">
              <h2 className="text-[1.2rem] text-gray-800 font-medium">
                {file?.fileName}
              </h2>
              <p className="text-sm opacity-75">
                {file?.fileType} /{file?.fileSize}
              </p>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default FileInfo;
