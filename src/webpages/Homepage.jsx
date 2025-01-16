import React from 'react';
import { useNavigate } from 'react-router-dom';
import UploadImage from '../components/UploadImage';

const HomePage = ({ onSubmit, setHasImage, hasImage }) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    onSubmit();
    navigate('/response');
  };

  return (
    <div className="homepage">
      <h1>Is it a Sandwich?</h1>
      <UploadImage setHasImage={setHasImage} hasImage={hasImage} />
      <button onClick = {handleSubmit}> Submit </button>
    </div>
  );
};

export default HomePage;
