const ProgressBar = ({ progress }) => {
  return (
    <>
      <div className="w-full h-4 mt-3 bg-gray-300 rounded-full">
        <div
          style={{ width: `${progress}%` }}
          className="bg-primary h-4 rounded-full"
        ></div>
        <p className="mt-2">{`${Number(progress).toFixed(0)}%`}</p>
      </div>
    </>
  );
};

export default ProgressBar;
