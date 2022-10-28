import React, { useState, useEffect } from "react";
import SingleCharacter from "../components/SingleCharacter"
import Navbar from "../components/Navbar"

function Characters({search}) {
  
  // console.log('search :>> ', search);
  const [characters, setCharacters] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const filterCharacters = () => {
     const charactersFilteredArray = characters.filter((character) => {  
       return character.name.toLowerCase().includes(search.toLowerCase())
      })
      return charactersFilteredArray
  }
  
  const fetchCharactersAsync = async () => {
    try {
      const url = "https://rickandmortyapi.com/api/character";
      const response = await fetch(url)
      const result = await response.json();
      setCharacters(result.results);
      setLoading(false);
      
    } catch (error) {
      setError(error.message);
      console.log(error);
      
    }

  }

  // const fetchCharacters = () => {
  //   const url = "https://rickandmortyapi.com/api/character";

  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log(result.results);
  //       setCharacters(result.results);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //       console.log(error);
  //     });
  // };



  useEffect(() => {
    // fetchCharacters();
    fetchCharactersAsync();
  }, []);


  return (
    <div>
      <div className="Cards">
        {!loading ? (
          filterCharacters().map((character) => {
            return <SingleCharacter character={character} /> 
            ;
          })
        ) : (
          <p>Loading...</p>
        )}
          {error && <p>{error}</p>}
      </div>

    </div>
  );
}

export default Characters
