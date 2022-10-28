import React, { useState } from "react";
import MyModal from './ MyModal';

function SingleCharacter({ character }) {

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={character.image} alt="rick and morty characters" />
        </div>
        <div className="flip-card-back">
          <p>{character.name}</p>
          <MyModal character={character} />
        </div>
      </div>
    </div>
  );
}

export default SingleCharacter;
