import { AlertCircle } from "lucide-react";

const AlertMessage = ({ message }) => {
  return (
    <>
      <div className="flex items-center gap-5 bg-red-500 mt-5 text-white p-3 justify-center">
        <AlertCircle />
        {message}
      </div>
    </>
  );
};

export default AlertMessage;
