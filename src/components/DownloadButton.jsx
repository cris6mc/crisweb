"use client";
import { saveAs } from "file-saver";

const DownloadButton = ({ title, content }) => {
  const handleDownload = () => {
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    saveAs(blob, `${title}.txt`);
  };

  return (
    <button
      onClick={handleDownload}
      className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      Descargar PDF (txt)
    </button>
  );
};

export default DownloadButton;
