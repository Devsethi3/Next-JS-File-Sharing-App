"use client";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import FileInfo from "../components/FileInfo";
import FileShareInfo from "../components/FileShareInfo";
import { FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";
import { app } from "@/firebaseConfig";

const FilePreview = ({ params }) => {
  const db = getFirestore(app);
  const [file, setFile] = useState();

  useEffect(() => {
    console.log(params?.fileId);
    params?.fileId && getFileInfo();
  }, []);

  const getFileInfo = async () => {
    const docRef = doc(db, "uploadedFile", params?.fileId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setFile(docSnap.data());
    } else {
      console.log("No such document");
    }
  };

  const onPasswordSave = async (password) => {
    const docRef = doc(db, "uploadedFile", params?.fileId);
    await updateDoc(docRef, {
      password: password,
    });
  };

  return (
    <>
      <div className=" outline-dashed outline-2 mt-10 outline-offset-2 rounded-md outline-gray-400 w-[950px] p-8 min-h-[70vh] mx-auto ">
        <Link href="/upload" className="flex items-center gap-3 mb-5">
          <FaArrowLeft />
          <span>Go Back</span>
        </Link>
        <div className="grid gap-5 grid-cols-2">
          <FileInfo file={file} />
          <FileShareInfo
            file={file}
            onPasswordSave={(password) => onPasswordSave(password)}
          />
        </div>
      </div>
    </>
  );
};

export default FilePreview;
