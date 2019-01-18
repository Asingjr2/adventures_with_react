import React from 'react';

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

  const images = props.images.map(( {description, id, urls} ) => {
    return <img key={id} src={urls.regular} alt={description}/>
  }); 

  return <div> {images}</div>
}

export default ImageList
