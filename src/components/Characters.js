import React, { useState, useEffect } from "react";

function Characters() {
  const [characters, setcharacters] = useState([]);
  const fetchCharacters = () => {
    const url = "https://rickandmortyapi.com/api/character";
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.results);
        setcharacters(result.results);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCharacters()
  }, [])
  
  return (
    <div>
      <h2>Rick & Morty App</h2>
      {characters ? (
        characters.map((character) => {
        return <p>{character.name}</p>
        })
      ) : (
          <p>No characters</p>
      )}
    </div>
  );
}

export default Characters;
