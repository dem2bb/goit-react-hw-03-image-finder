import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  static propTypes = {
    pictures: PropTypes.array.isRequired,
    onOpenModal: PropTypes.func.isRequired,
  };

  render() {
    return (
      <ul className="ImageGallery">
        <ImageGalleryItem
          pictures={this.props.pictures}
          onOpenModal={this.props.onOpenModal}
        />
      </ul>
    );
  }
}

export default ImageGallery;
