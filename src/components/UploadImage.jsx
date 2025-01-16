import React, { useState, useRef, useEffect } from "react";

const UploadImage = ({ setHasImage, hasImage }) => {
    const [uploadedImage, setUploadedImage] = useState(null);
    const fileInputRef = useRef(null);

    useEffect(() => {
        console.log(`Updated hasImage value: ${hasImage}`);
    }, [hasImage]);

    const handleImageUpload = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            setUploadedImage(event.target.files[0]);
            setHasImage(true);
          }
    };

    const handleRemoveImage = () => {
        setUploadedImage(null);
        fileInputRef.current.value = "";
        setHasImage(false);
    };

    return (
        <div>
            <h2>Upload a Potential Sandwich!</h2>
            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
            />
            <br />
                {uploadedImage && (
                    <div>
                        <img
                            alt="Potential Sandwich Not Found"
                            width={"250px"}
                            src={URL.createObjectURL(uploadedImage)}
                        />
                        <br />
                        <button type="button" onClick={handleRemoveImage}>Remove Uploaded Image</button>
                    </div>
                )}
            <br />
        </div>
    );

};

export default UploadImage;
