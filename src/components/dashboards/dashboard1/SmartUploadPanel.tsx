import React, { useState, DragEvent, ChangeEvent } from "react";
import toast from "react-hot-toast";

const SmartUploadPanel: React.FC = () => {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      if (droppedFile.name.endsWith(".csv")) {
        setFile(droppedFile);
        toast.success("CSV file uploaded successfully!");
      } else {
        toast.error("Please upload only CSV files.");
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.name.endsWith(".csv")) {
        setFile(selectedFile);
        toast.success("CSV file uploaded successfully!");
      } else {
        toast.error("Please upload only CSV files.");
      }
    }
  };

  const handleClick = () => {
    document.getElementById("fileInput")?.click();
  };

  return (
    <div className="text-center bg-white border-gray-200 shadow-md p-6 rounded-[16px]">
      <div
        className={`border-2 border-dashed p-6 rounded-[16px] transition-colors duration-200 cursor-pointer ${
          dragActive ? "border-blue-500 bg-blue-50" : "border-primary"
        }`}
        style={{ height: "620px" }}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            {/* Cloud upload SVG */}
            <div className="mx-auto mb-4 w-20 h-16 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                className="w-full h-full text-sky-500"
                fill="none"
                stroke="#2b9cf3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M48 40a8 8 0 10-15.6-3.6A10 10 0 1016 40h32z" />
                <path d="M32 24v16" />
                <path d="M24 32l8-8 8 8" />
              </svg>
            </div>

            {file ? (
              <p className="text-sm text-gray-700">
                <span className="font-medium">Uploaded:</span> {file.name}
              </p>
            ) : (
              <>
                <p className="text-sm text-gray-600">
                  Drag your file here or click anywhere to upload
                </p>
                <p className="text-xs mt-2 text-red-500">
                  Upload CSV Files Only
                </p>
              </>
            )}

            <input
              id="fileInput"
              type="file"
              accept=".csv"
              className="hidden"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartUploadPanel;
