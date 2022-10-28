import React, { useState, useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";

function AdvancedExample({ pages }) {

    // const prevPage = () => { pages.prev };
    // const nextPage = () => { pages.next };

  return (
    <div className="Pagination">
    <Pagination>
        {/* <Pagination.Prev onClick={prevPage}/>
        <Pagination.Next onClick={nextPage}/> */}
        <Pagination.Prev />
        <Pagination.Next />
      </Pagination>
    </div>
  );
}

export default AdvancedExample;
