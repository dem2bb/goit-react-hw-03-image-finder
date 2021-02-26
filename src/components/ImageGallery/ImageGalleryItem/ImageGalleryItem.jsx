import React from 'react';

const ImageGalleryItem = ({ pictures, onOpenModal }) => {
  return pictures.map(({ id, webformatURL, largeImageURL, tags }) => {
    return (
      <li key={id} className="ImageGalleryItem">
        <img
          src={webformatURL}
          alt={tags}
          className="ImageGalleryItem-image"
          data-img={largeImageURL}
          onClick={onOpenModal}
        />
      </li>
    );
  });
};

export default ImageGalleryItem;
