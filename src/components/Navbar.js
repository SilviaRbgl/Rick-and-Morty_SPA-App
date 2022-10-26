import React from 'react'

function Navbar() {

const onChangeInput = (e) => {
    console.log(e.target.value);
}

  return (
    <div className="Navbar">
        <input
              type="text"
              placeholder='Search...'
              onChange={onChangeInput}
        />
    </div>
  )
};

export default Navbar