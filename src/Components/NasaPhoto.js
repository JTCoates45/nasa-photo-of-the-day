import React from 'react';

const NasaPhoto = (props) => {
    return (
      <div className="nasa-photo">
        <p>{props.photo.date}</p>
        <p>{props.photo.explanation}</p>
        <img src={props.photo.hdurl}/>
        <h3>{props.photo.title}</h3>
      </div>
    )
  }
  
  export default NasaPhoto;