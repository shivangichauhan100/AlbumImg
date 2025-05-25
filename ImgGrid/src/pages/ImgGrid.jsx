import React from 'react';
import './imgGrid.css'

const ImgGrid = ({ images }) => {
  const leftImages = images.slice(0, 3);
  const rightImages = images.slice(3, 6);

  return (
    <div className="album">
      <div className="left-column">
        {leftImages.map((img, index) => (
          <img key={index} src={img} alt={`img-${index}`} />
        ))}
      </div>
      <div className="right-column">
        {rightImages.map((img, index) => (
          <img key={index + 3} src={img} alt={`img-${index + 3}`} />
        ))}
      </div>
    </div>
  );
};

export default ImgGrid;
