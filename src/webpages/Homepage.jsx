import React from 'react';
import { useNavigate } from 'react-router-dom';
import uploadIcon from '../assets/uploadIcon.svg';
import UploadImage from '../components/UploadImage';

const HomePage = ({ onSubmit, setHasImage, hasImage }) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    onSubmit();
    navigate('/response');
  };

  return (
    <div>
      <h1>Is this a sandwich?</h1>
      <h2>Upload a potential sandwich!</h2>
      <div className="upload-container">
        <img src={uploadIcon} alt="Upload Icon" />
        <UploadImage setHasImage={setHasImage} hasImage={hasImage} />
      </div>
      <div className="submit-container">
      <button className="submit-button" onClick={handleSubmit} >
          Submit
        </button>
      </div>
    </div>
  );
};

export default HomePage;
