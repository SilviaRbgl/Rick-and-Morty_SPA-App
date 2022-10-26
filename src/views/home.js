import React, { useState, useEffect } from "react";
import Characters from "../components/Characters";
import SearchBarApp from "../components/SearchAppBar";
import Cards from "../components/Cards";

function Home() {
  const [input, setInput] = useState([]);

  const getInput = (value) => {
    const letters = [...input, value];
    setInput(letters.join(""));
    console.log("input :>> ", input);
  };

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

  const filteredCharacters = (character) => {
    character.filter((character))
    return character.name.includes(input)
  }
    // characters

  // filteredCharacters = characters.filter((character) =>
  // return character.name.includes(input))


  return (
    
    <div className="Cards">
      <SearchBarApp getInput={getInput} />
      <Characters />

      {characters ? (
        characters.map((character, index) => {
          return <Cards key={index} character={character} />;
        })
      ) : (
        <p>Loading...</p>
      )}
      {error && <p>{error}</p>}

      
    </div>
  );
}

export default Home;

