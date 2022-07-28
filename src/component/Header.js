import React, { useState } from "react";

function Header({onAdd, onSort}) {
  const [state, setState] = useState(false);

  const addCardHandler = () => {
    setState(true);
    onAdd(state)
  };

  const sortCardHandler = () => {
    setState(true);
    onSort(state)
  }

  return (
    <div className="header">
      <button onClick={addCardHandler}>add card</button>
      <button onClick={sortCardHandler}>sort card</button>
    </div>
  );
}

export default Header;
