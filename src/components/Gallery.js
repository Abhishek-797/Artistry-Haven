// Gallery.js

import React from "react";
import "./Gallery.css"; // Import your styles for Gallery if needed

const Gallery = () => {
  const imageArray = [
    "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image6.jpg",
  "/images/image7.png",
  "/images/image8.jpg",
  "/images/image9.jpg",
  "/images/image10.jpg",
  "/images/image11.jpg",
    // Add more image URLs as needed
  ];

  return (
    <div className="gallery-container">
      <div className="image-container">
        {imageArray.map((image, index) => (
          <div key={index} className="image-box">
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
