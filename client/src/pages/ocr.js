import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const OCR = () => {
  const [recognizedText, setRecognizedText] = useState('');
  const [imagePath, setImagePath] = useState("/ktp.jpeg"); // Assuming the image is in the public folder
  const navigate = useNavigate();

  const handleOCR = async () => {
    try {
      const response = await axios.post("/api/v1/ocr", { imagePath });
      setRecognizedText(response.data);
    } catch (error) {
      console.error('Error processing OCR:', error);
    }
  };

  return (
    <div>
      <h2>OCR Page</h2>
      <img src={imagePath} alt="Image for OCR" />
      <button onClick={handleOCR}>Run OCR</button>
      {recognizedText && <div>Recognized Text: {recognizedText}</div>}
    </div>
  );
};

export default OCR;
