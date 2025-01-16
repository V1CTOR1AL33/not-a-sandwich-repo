import React from 'react';
import { useNavigate } from 'react-router-dom';

const ResponsePage = ({ message }) => {
  const navigate = useNavigate();

  const handleRetry = () => {
    navigate('/');
  };

  return (
    <div className="response-page">
      <h2 className="response-message">{message}</h2>
      <div className='retry-container'>
        <button onClick={handleRetry} className="retry-button">
          Try Again?
        </button>
      </div>
    </div>
  );
};

export default ResponsePage;
