import React from 'react';
import { useNavigate } from 'react-router-dom';

const ResponsePage = ({ message }) => {
  const navigate = useNavigate();

  const handleRetry = () => {
    navigate('/');
  };

  return (
    <div className="response-page">
      <h1 className="response-message">{message}</h1>
      <button onClick={handleRetry} className="retry-button">
        Try Again?
      </button>
    </div>
  );
};

export default ResponsePage;
