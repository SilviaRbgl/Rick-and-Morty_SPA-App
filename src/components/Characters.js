import React, { useState, useEffect } from "react";
import SingleCharacter from "../components/SingleCharacter"

function Characters() {
  const [characters, setCharacters] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCharacters = () => {
    const url = "https://rickandmortyapi.com/api/character";

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.results);
        setCharacters(result.results);
        setLoading(false);
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
      {!loading ? (
        characters.map((character) => {
          return <SingleCharacter character={character} />
          ;
        })
      ) : (
        <p>Loading...</p>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default Characters;
