import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';

const ResponsePage = ({ message, setHasImage, hasImage }) => {
  const navigate = useNavigate();
  const [shouldShowConfetti, setShouldShowConfetti] = useState(false);

  // Use import.meta.glob to dynamically import images
  const memeImages = useMemo(() => {
    const memes = import.meta.glob('../assets/memes/*.{png,jpg,jpeg,svg}', { eager: true });
    return Object.values(memes).map((module) => module.default);
  }, []);

  // Select a random meme
  const randomMeme = useMemo(() => {
    return memeImages[Math.floor(Math.random() * memeImages.length)];
  }, [memeImages]);

  useEffect(() => {
    const randomChance = Math.random();
    if (randomChance < 0.5) {
      setShouldShowConfetti(true);
    }
  }, []);

  const handleRetry = () => {
    navigate('/');
    setHasImage(false);
    setShouldShowConfetti(false);
  };

  return (
    <div className="response-page">
      {shouldShowConfetti && <Confetti />}
      <h3 className="response-message">{message}</h3>
      <div className="meme-container">
        <img src={randomMeme} alt="Random Sandwich Meme" className="sandwich-meme" />
      </div>
      <div className="retry-container">
        <button onClick={handleRetry} className="retry-button">
          Try Again?
        </button>
      </div>
    </div>
  );
};

export default ResponsePage;
