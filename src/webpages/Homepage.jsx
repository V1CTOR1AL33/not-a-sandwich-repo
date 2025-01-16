import React from 'react';
import { useNavigate } from 'react-router-dom';
import uploadIcon from '../assets/uploadIcon.svg';

const HomePage = ({ onSubmit }) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    onSubmit();
    navigate('/response');
  };

  console.log("Rendering HomePage...");

  return (
    <div>
      <h1>Is this a sandwich?</h1>
      <h2>Upload a potential sandwich</h2>
      <div className="upload-button">
        <img src={uploadIcon} alt="Upload Icon" />
      </div>
      <div className="submit-container">
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default HomePage;
