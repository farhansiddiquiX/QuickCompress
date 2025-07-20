import React, { useState, useRef } from "react";
import './ImageCompressor.css';

export default function ImageCompressor() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [compressedUrl, setCompressedUrl] = useState("");
  const [compressedSize, setCompressedSize] = useState(null);
  const [quality, setQuality] = useState(0.7);
  const canvasRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleQualityChange = (e) => {
    setQuality(e.target.value / 100);
  };

  const compressImage = () => {
    const img = new Image();
    img.src = selectedImage;

    img.onload = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      canvas.toBlob(
        (blob) => {
          const newImgUrl = URL.createObjectURL(blob);
          setCompressedUrl(newImgUrl);
          setCompressedSize((blob.size / 1024).toFixed(2));
        },
        "image/jpeg",
        quality
      );
    };
  };

  return (
    <div className="flex">
    <div className="compressor-container">
      <h2>Image Compressor</h2>
      <p className="description">Best web app to compress image files online for free.</p>

      <div
        className="drop-area"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
            e.preventDefault();
            const file = e.dataTransfer.files[0];
            if (file) {
            handleImageUpload({ target: { files: [file] } });
            }
        }}
        >
        <p>Or drag & drop your image here</p>
        <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="file-input"
        />
        </div>


      {selectedImage && (
        <>
          <div className="slider-container">
            <p>Adjust Image Quality: {Math.round(quality * 100)}%</p>
            <input
              type="range"
              min="10"
              max="100"
              value={Math.round(quality * 100)}
              onChange={handleQualityChange}
              className="slider"
            />
          </div>

          <div className="preview-container">
            <h4>Preview:</h4>
            <img
              src={selectedImage}
              alt="original"
              className="image-preview"
            />
          </div>
          <button onClick={compressImage} className="compress-btn">Compress Image</button>
        </>
      )}

      {compressedUrl && (
        <div className="compressed-container">
          <h4>Compressed Image:</h4>
          <img
            src={compressedUrl}
            alt="compressed"
            className="image-preview"
          />
          <p>Compressed Size: {compressedSize} KB</p>
          <a href={compressedUrl} download="compressed.jpg">
            <button className="download-btn">Download Compressed Image</button>
          </a>
        </div>
      )}

      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
    </div>
    </div>
  );
}
