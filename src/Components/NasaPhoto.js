import React from 'react';
<ErrorBoundary>
const NasaPhoto = (props) => {
    return (
     
      <div className="nasa-photo">
        <p>{props.photo.date}</p>
        <p>{props.photo.explanation}</p>
        {/* <img> src={props.photo.hdurl}</img> */}
        <h3>{props.photo.title}</h3>
      </div>
      
    )
  }
  </ErrorBoundary>
  export default NasaPhoto;