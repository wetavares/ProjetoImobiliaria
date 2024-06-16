import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

export default class Slide extends React.Component{
    render() {
        const images = [
            {
            original: '/img/photos/pexels-expect-best-323780.jpg',
            thumbnail: '/img/photos/pexels-expect-best-323780.png',
            },
            {
            original: '/img/photos/pexels-medhat-ayad-439227.jpg',
            thumbnail: '/img/photos/pexels-medhat-ayad-439227.png',
            },
            {
            original: '/img/photos/pexels-pixabay-271624.jpg',
            thumbnail: '/img/photos/pexels-pixabay-271624.png',
            },
            {
            original: '/img/photos/pexels-igor-starkov-1693946.jpg',
            thumbnail: '/img/photos/pexels-igor-starkov-1693946.png',
            },
            {
            original: '/img/photos/pexels-pixabay-271618.jpg',
            thumbnail: '/img/photos/pexels-pixabay-271618.jpg',
            },
            {
            original: '/img/photos/pexels-vecislavas-popa-813692.jpg',
            thumbnail: '/img/photos/pexels-vecislavas-popa-813692.png',
            },
        ];
  
        return <ImageGallery items={images} autoPlay={true} />;
      }
}