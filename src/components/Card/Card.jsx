import React from "react";

const Card = ({ eyesColor, body, hairColor, nationality, skinColor }) => {
  return (
    <div
      style={{
        border: 2,
        borderRadius: 20,
        height: 100,
        width: 300,
        backgroundColor: "grey",
        margin: 20,
        padding: 20,
      }}
    >
      <label>couleur des yeux : {eyesColor}</label>
      <br />
      <label>couleur de peau : {skinColor}</label>
      <br />
      <label>couleur des cheveux : {hairColor}</label>
      <br />
      <label>corpulance : {body}</label>
      <br />
      <label>Nationalité : {nationality}</label>
    </div>
  );
};

export default Card;
