import React, { useState } from 'react'
import Characters  from '../components/Characters'
import Navbar from '../components/Navbar'

function Home() {

  const [search, setSearch] = useState("")
 
const getInput = (input) => {
  console.log(input)
  setSearch(input)
  console.log(search);
}

  return (
    <div>
      <Navbar getInput ={getInput} />
      <Characters search={search} />
    </div> 
  )
}

export default Home