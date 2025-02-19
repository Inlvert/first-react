import React from "react";
import UserData from "./UserData";

function Child({user}) {
  return (
    <div style={{padding: '20px', border: '2px solid white'}}>
      <h2>Child</h2>
      <UserData/>
    </div>
  );
}

export default Child;
