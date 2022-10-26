import React from 'react'

function SingleCharacter({character}) {
  return (
    <div className="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src={character.image} alt="rick and morty characters" />
            </div>
            <div class="flip-card-back">
                <p>{character.name}</p>
                <button type="text">LEARN MORE</button>  
            </div>
        </div>      
    </div>
  )
}

export default SingleCharacter