import React from "react";

function Modal({character}) {

let modal = document.getElementById("myModal");
  let btn = document.getElementById("myBtn");
  let span = document.getElementsByClassName("close")[0];

  btn.onclick = function () {
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  return (
    <div id="myModal" className="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <img src={character.image} alt="rick and morty characters" />
        <p>{character.name}</p>
        <p>{character.species}</p>
        <p>{character.status}</p>
      </div>
    </div>
  );
}

export default Modal;
