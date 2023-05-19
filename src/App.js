// Why did we need to import React here?
// this is not done in the tutorial
import React from "react";
import { useState } from 'react';

function Square({value}) {
	const [shade, setShade] = useState("square");

	function handleClick() {
    console.log('clicked!');
  }

  return(
		<button
		  className={shade}
  		onClick={handleClick}
		>
	  	{value}
		</button>
	);
}

export default function Board() {
  return (
	    <>
		<h1>Alex</h1>
      <div className="board-row">
        <Square value="0"/>
        <Square value="1"/>
        <Square value="2"/>
        <Square value="3"/>
        <Square value="5"/>
        <Square value="8"/>
      </div>
		<br/>
		<hr/>
		<h1>Bob</h1>
      <div className="board-row">
        <Square value="0"/>
        <Square value="1"/>
        <Square value="2"/>
        <Square value="3"/>
        <Square value="5"/>
        <Square value="8"/>
      </div>
		<br/>
		<hr/>
		<hr/>
		<h1>Chris</h1>
      <div className="board-row">
        <Square value="0"/>
        <Square value="1"/>
        <Square value="2"/>
        <Square value="3"/>
        <Square value="5"/>
        <Square value="8"/>
      </div>
    </>
  );
}
