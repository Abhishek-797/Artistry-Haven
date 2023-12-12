// Home.js

import React, { useState } from "react";
import "./Home.css"; // Import your styles for Home if needed


const Home = () => {
  const [imageArray, setImageArray] = useState([
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
  ]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageArray((prevImages) => [...prevImages, imageUrl]);
    }
  };

  const handleImageDelete = (index) => {
    const newImageArray = [...imageArray];
    newImageArray.splice(index, 1);
    setImageArray(newImageArray);
  };

  return (
    <div className="home-container">
      <h1 className="welcome-text">Welcome to the Home Page</h1>

      <div className="image-container">
        {imageArray.map((image, index) => (
          <div key={index} className="image-box">
            <img src={image} alt={`Image ${index + 1}`} />
            {/* Add the delete button with the correct class */}
            <button
              className="delete-image-button"
              onClick={() => handleImageDelete(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* File input for image upload */}
      <label htmlFor="imageInput" className="add-image-button">
        Add Image
      </label>
      <input
        type="file"
        id="imageInput"
        accept="image/*"
        onChange={handleImageUpload}
        className="add-image-input"
      />
    </div>
  );
};

export default Home;

