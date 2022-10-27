import React, {useState} from "react";
import Modal from "../components/Modal"
import ModalTest from "./ModalTest";

function SingleCharacter({ character }) {

const [modal, setModal] = useState()   
const showModal = () => {
    
}
  
    return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={character.image} alt="rick and morty characters" />
        </div>
        <div className="flip-card-back">
          <p>{character.name}</p>
            <button onClick={showModal} type="button">LEARN MORE</button>
            <ModalTest character={character} />
        </div>
      </div>
    </div>
  );
}

export default SingleCharacter;
