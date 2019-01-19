import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

// Creating functional component that returns array of images.
const ImageList = (props) => {
  // Creating images variable equal to list of image urls.
  // Mapping over array items to return url string.  
  // Structure can be found in console log when the original string was ran.
  //***************************************************************** */
  // Can destructure with ES6 with object elements....replacing below with array of object subelements....!!!!!
  // const images = props.images.map((image) => {
    //   return <img key={image.id} src={image.urls.regular} alt={image.description}/>
  //***************************************************************** */

  // Using map to work through array of images and return multiple imageCard elements.
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />
  }); 

  return <div className="image-list">{images}</div>
}

export default ImageList
