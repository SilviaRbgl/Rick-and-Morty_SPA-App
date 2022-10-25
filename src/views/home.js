import React from "react";
import Characters from "../components/Characters";
import SearchBarApp from "../components/SearchAppBar";

function home() {
  return (
    <div>
          <SearchBarApp />
          <Characters />
    </div>
  );
}

export default home;
