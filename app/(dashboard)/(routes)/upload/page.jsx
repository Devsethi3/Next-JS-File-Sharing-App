"use client";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import UploadForm from "./_components/UploadForm";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { generateRandomString } from "@/app/utils/RandomString";
import { app } from "@/firebaseConfig";

const Upload = () => {
  const { user } = useUser();
  const db = getFirestore(app);
  const router = useRouter();
  const [fileDocId, setFileDocId] = useState();
  const [uploadCompleted, setUploadCompleted] = useState(false);

  const [progress, setProgress] = useState();
  const storage = getStorage(app);

  const uploadFile = (file) => {
    const storageRef = ref(storage, "upload-file/" + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, file.type);
    uploadTask.on("state_changed", (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is" + progress + "% done");
      setProgress(progress);
      if (progress === 100) {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadUrl) => {
            console.log("File available at", downloadUrl);
            saveInfo(file, downloadUrl);
          })
          .then(() => {
            setUploadCompleted(true); // Set uploadCompleted to true when upload is finished
          });
      }
    });
  };

  const saveInfo = async (file, fileURL) => {
    const docId = generateRandomString().toString();
    await setDoc(doc(db, "uploadedFile", docId), {
      fileName: file?.name,
      fileSize: file?.size,
      fileType: file?.type,
      fileURL: fileURL,
      userEmail: user?.primaryEmailAddress.emailAddress,
      userName: user?.fullName,
      fullName: "",
      password: "",
      id: docId,
      shortUrl: process.NEXT_PUBLIC_BASE_URL + generateRandomString(),
    });
    setFileDocId(docId);
  };

  useEffect(() => {
    if (uploadCompleted) {
      setTimeout(() => {
        setUploadCompleted(false);
        router.push("/file-preview/" + fileDocId);
      }, 2000);
    }
  }, [uploadCompleted, fileDocId]); // Add fileDocId as a dependency

  return (
    <div className="p-5 px-8 md:px-28">
      <h2 className="m-5 text-center text-2xl">
        Start <span className="text-primary font-semibold">Uploading</span> File
        and <span className="text-primary font-semibold">Share It.</span>
      </h2>
      {uploadCompleted && (
        <p className="text-green-600 text-center">Upload completed!</p>
      )}
      <UploadForm
        progress={progress}
        uploadBtnClick={(file) => uploadFile(file)}
      />
    </div>
  );
};

export default Upload;
