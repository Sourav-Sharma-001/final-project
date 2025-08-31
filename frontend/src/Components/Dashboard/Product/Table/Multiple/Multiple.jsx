import React, { useState } from "react";
import "./Multiple.css";
import { FaFileCsv } from "react-icons/fa6";
import { toast } from "react-toastify";

export default function Multiple({ onClose }) {
  const [file, setFile] = useState(null);
  const [step, setStep] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);

  const validateFile = (f) => {
    if (f && f.type !== "text/csv" && !f.name.endsWith(".csv")) {
      setError("Only CSV files are allowed.");
      return false;
    }
    setError("");
    return true;
  };

  const handleFileChange = (e) => {
    const f = e.target.files[0];
    if (validateFile(f)) setFile(f);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const f = e.dataTransfer.files[0];
    if (validateFile(f)) setFile(f);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleNext = () => {
    if (file) setStep(2);
  };

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:5000/api/products/upload-csv", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        toast.success(data.message);
        onClose();
      } else {
        toast.error(data.error || "Upload failed");
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="multiple-modal" onClick={(e) => e.stopPropagation()}>
        <h3>Upload CSV File</h3>

        <div
          className={`drag-drop-zone ${isDragging ? "dragging" : ""} ${step === 2 ? "readonly" : ""}`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
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
                accept=".csv,text/csv"
                onChange={handleFileChange}
                hidden
              />
            </>
          )}
        </div>

        {error && <p className="error-text">{error}</p>}

        {step === 2 && file && (
          <div className="file-preview">
            <FaFileCsv size={20} />
            <div className="file-info">
              <span>{file.name}</span>
              <p>{(file.size / 1024).toFixed(2)} KB</p>
            </div>
          </div>
        )}

        <div className="modal-actions">
          <button className="cancel-button" onClick={onClose} disabled={uploading}>
            Cancel
          </button>

          {step === 1 ? (
            <button className="upload-button" onClick={handleNext} disabled={!file || error || uploading}>
              Next
            </button>
          ) : (
            <button className="upload-button" onClick={handleUpload} disabled={uploading}>
              {uploading ? "Uploading..." : "Upload"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
