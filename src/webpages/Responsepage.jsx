import React from 'react';
import { useNavigate } from 'react-router-dom';

const ResponsePage = ({ message, setHasImage, hasImage }) => {
  const navigate = useNavigate();

  const handleRetry = () => {
    navigate('/');
    setHasImage(false);
    
  };

  return (
    <div className="response-page">
      <h3 className="response-message">{message}</h3>
      <div className='retry-container'>
        <button onClick={handleRetry} className="retry-button">
          Try Again?
        </button>
      </div>
    </div>
  );
};

export default ResponsePage;
