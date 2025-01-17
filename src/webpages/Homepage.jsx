import React from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UploadImage from '../components/UploadImage';
import Modal from 'react-modal';

const HomePage = ({ onSubmit, setHasImage, hasImage }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = () => {
    onSubmit();
    navigate('/response');
  };

  const handleMouseEnter = () => {
    setShowModal(true);
  };

  const handleMouseLeave = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h1>Is this a sandwich?</h1>
      <h2>Upload a potential sandwich!</h2>
      <div className="upload-container">
        <UploadImage setHasImage={setHasImage} hasImage={hasImage} />
      </div>
      <div className="submit-container">
        <button className="submit-button" onClick={handleSubmit} >
            Submit
        </button>
      </div>
      <div className="about-container">
          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="about-button"
          >
            ?
          </button>
          {showModal && (
            <Modal
              isOpen={showModal}
              className="modal"
              overlayClassName="overlay"
              onRequestClose={handleMouseLeave}
              ariaHideApp={false}
            >
              <p>Have you ever wondered if something was a sandwich? Upload an image and find out! </p>
            </Modal>
          )}
        </div>
    </div>
  );
};

export default HomePage;
