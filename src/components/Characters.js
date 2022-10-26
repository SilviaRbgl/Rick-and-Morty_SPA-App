import React, { useState, useEffect } from "react";
import Cards from "./Cards";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);
   
  const fetchCharacters = () => {
    const url = "https://rickandmortyapi.com/api/character";
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.results);
        setCharacters(result.results);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };
  

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div className="Cards">
      {characters ? (
        characters.map((character, index) => {
          return <Cards key={index} character={character} />;
        })
      ) : (
        <p>Loading...</p>
      )}
        { error && <p>{error}</p>} 
     
    </div>
  );
}

export default Characters;
