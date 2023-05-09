// Why did we need to import React here?
// this is not done in the tutorial
import React from "react";

function Square({value}) {
  return <button className="square">{value}</button>;
}

export default function Board() {
  return (
	    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
