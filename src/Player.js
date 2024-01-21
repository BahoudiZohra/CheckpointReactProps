import React from 'react'
import Card from 'react-bootstrap/Card';


const Player = (props) => {
  return (
    <div>
      <Card style={{display: "flex", width: "18rem", margin: "10px", border: "2px solid", 
      borderRadius: "8px", cursor:"pointer" }}>
      <Card.Img variant="top" src={props.image} alt={props.name} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Team: {props.team}<br/>
          Nationality: {props.nationality}<br/>
          JerseyNumber: {props.jerseyNumber}<br />
          Age: {props.age}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
};

export default Player;
