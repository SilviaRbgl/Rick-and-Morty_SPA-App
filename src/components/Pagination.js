import React, {useState, useEffect} from "react";
import Pagination from 'react-bootstrap/Pagination';

function AdvancedExample() {

// const [pages, setPages] = useState([]);

//     const fetchPages = () => {
//     const url = "https://rickandmortyapi.com/api/character/";

//     fetch(url)
//       .then((response) => response.json())
//       .then((result) => {
//         console.log(result.results);
//         setPages(result.results);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   useEffect(() => {
//     fetchPages();
//   }, []);
    
    return (
    <Pagination>
      <Pagination.Prev />
      <Pagination.Next active/>
    </Pagination>
  );
}

export default AdvancedExample;
