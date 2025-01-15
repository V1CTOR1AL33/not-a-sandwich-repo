import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = ({ onSubmit }) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    onSubmit();
    navigate('/response');
  };

  return (
    <div className="homepage">
      <h1>Is it a Sandwich?</h1>
      <button onClick = {handleSubmit}> Submit </button>
    </div>
  );
};

export default HomePage;
