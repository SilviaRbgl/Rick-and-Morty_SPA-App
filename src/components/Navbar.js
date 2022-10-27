import React from 'react'

function Navbar({getInput}) {


  return (
    <div className="Navbar">
        <input
          type="text"
          placeholder='Search...'
          onChange={(e)=> getInput(e.target.value)}
        />
    </div>
  )
};

export default Navbar;