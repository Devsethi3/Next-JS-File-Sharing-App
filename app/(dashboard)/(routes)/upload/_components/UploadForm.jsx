"use client"
import { useState } from "react";
import AlertMessage from "./AlertMessage";
import FilePreview from "./FilePreview";
import ProgressBar from "./ProgressBar";

const UploadForm = ({ uploadBtnClick, progress }) => {
  const [file, setFile] = useState();
  const [errMessage, setErrMessage] = useState();
  const onFileSelect = (file) => {
    if (file && file.size > 2000000) {
      console.log("Size is greater than 2 MB");
      setErrMessage("Maximum File Size is 2MB");
      return;
    } else {
      setErrMessage(null);
      setFile(file);
    }
  };
  return (
    <div className="text-center">
      <div className="flex items-center justify-center w-full">
        <label
          for="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-80 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-[#ecfff9] hover:bg-[#f1fffa]"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-[100px] h-[100px] mb-4 text-primary"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="text-xl">
              Click to upload or{" "}
              <span className="text-primary font-semibold">drag</span> and{" "}
              <span className="text-primary font-semibold">drop</span>
            </p>
            <p className="mt-4 text-gray-500 text-sm">
              SVG, PNG, JPG or GIF(MAX SIZE : 2MB)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            onChange={(e) => onFileSelect(e.target.files[0])}
            className="hidden"
          />
        </label>
      </div>
      {file ? (
        <FilePreview file={file} removeFile={() => setFile(null)} />
      ) : null}
      {errMessage ? <AlertMessage message={errMessage} /> : null}
      {progress > 0 ? (
        <ProgressBar progress={progress} />
      ) : (
        <button
          disabled={!file}
          onClick={() => uploadBtnClick(file)}
          className="bg-primary font-medium text-white py-3 px-10 mt-5 rounded-full disabled:bg-gray-400"
        >
          Upload
        </button>
      )}
    </div>
  );
};

export default UploadForm;
