import React, { useState } from "react";
import "./Multiple.css";
import { FaFileCsv } from "react-icons/fa6";


export default function Multiple({ onClose }) {
  const [file, setFile] = useState(null);
  const [step, setStep] = useState(1);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleNext = () => {
    if (file) setStep(2);
  };

  const handleUpload = () => {
    if (file) {
      console.log("Uploading:", file.name);
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="multiple-modal" onClick={(e) => e.stopPropagation()}>
        <h3>Upload CSV File</h3>

        <div
          className="drag-drop-zone"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {file ? (
            <p>{file.name}</p>
          ) : (
            <>
              <p>Drag your CSV here</p>
              <p>or</p>
              <label htmlFor="file-upload" className="browse-link">
               Browse
              </label>
              <input
                id="file-upload"
                type="file"
                accept=".csv"
                onChange={handleFileChange}
                hidden
              />
            </>
          )}
        </div>

        {step === 2 && file && (
          <div className="file-preview">
            <div><FaFileCsv size={20}/></div>
            <span>{file.name}</span>
          </div>
        )}

        <div className="modal-actions">
          <button className="cancel-button" onClick={onClose}>
            Cancel
          </button>

          {step === 1 ? (
            <button
              className="upload-button"
              onClick={handleNext}
              disabled={!file}
            >
              Next
            </button>
          ) : (
            <button className="upload-button" onClick={handleUpload}>
              Upload
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
