"use client";
import { useState } from "react";
import { GrSend } from "react-icons/gr";
import { MdOutlineContentCopy } from "react-icons/md";

const FileShareInfo = ({ file, shortUrl, onPasswordSave }) => {
  const [isPasswordEnable, setIsPasswordEnable] = useState(false);
  const [password, setPassword] = useState("");

  const handleCopyShortUrl = () => {
    navigator.clipboard.writeText(shortUrl);
  };

  return (
    file && (
      <>
        <div className="py-5 rounded-md flex flex-col gap-12">
          <div className="flex flex-col gap-1 relative">
            <span className="text-gray-600">Short URL:</span>
            <div className="relative">
              <input
                type="text"
                value={shortUrl}
                className="py-1.5 px-3 bg-gray-100 outline-none w-full rounded-md"
                placeholder="https://localhost:3000"
                readOnly
              />
              <MdOutlineContentCopy
                className="text-gray-600 cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-3"
                onClick={handleCopyShortUrl}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <input
                id="password"
                className="cursor-pointer "
                name="password"
                type="checkbox"
                onChange={(e) => setIsPasswordEnable(e.target.checked)}
              />
              <label className="cursor-pointer" htmlFor="password">
                Enable Password?
              </label>
            </div>
            {isPasswordEnable && (
              <div className="flex items-center gap-4">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="py-1.5 px-3 w-full bg-gray-100 outline-none rounded-md"
                />
                <button
                  onClick={() => onPasswordSave(password)}
                  className="bg-primary text-white py-2 px-4 rounded-md"
                >
                  Save
                </button>
              </div>
            )}
          </div>
          <div className="border-2 p-4 rounded-md">
            <div className="flex flex-col gap-1">
              <span className="text-gray-600">Send File To Email:</span>
              <input
                type="text"
                className="py-1.5 px-3 bg-gray-100 outline-none rounded-md"
                placeholder="example@gmail.com"
              />
            </div>
            <button className="bg-primary flex items-center gap-2 justify-center mt-5 w-full text-white py-2 px-4 rounded-md">
              Send File
              <GrSend />
            </button>
          </div>
        </div>
      </>
    )
  );
};

export default FileShareInfo;
