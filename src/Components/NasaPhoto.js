import React from 'react';
import styled from 'styled-components'
//adding so i can commit
const Heading = styled.h3`
font-size: 3em;
color: purple;
`;

const Wording = styled.p`
color:pink;`

const Photograph = styled.img`
max-width: 40%`

const Container = styled.section`
padding: 4em;
background: grey;
color:white;
font-size: 1em;`

const Dateof = styled.p`
color: black;`

const NasaPhoto = (props) => {
    return (
      <div className="nasa-photo">
        <Container>
          <Heading>
        <h3>{props.photo.title}</h3>
        </Heading>
        <img src={props.photo.hdurl}/>
        <Wording>
        <p>{props.photo.explanation}</p>
        </Wording>
        <Dateof>
        <p>{props.photo.date}</p>
        </Dateof>
        </Container>
      </div>
    )
  }
  
  export default NasaPhoto;