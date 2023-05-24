import { useState } from 'react'

interface CardProps {
  value: string;
}

export default function Card({value}: CardProps) {
  const [toggled, setToggled] = useState(false);

  function handleClick() {
    setToggled(!toggled);
  }

  const display = "card" + (toggled ? 'On' : 'Off')

  return(
		<button
		  className={display}
  		onClick={handleClick}
		>
	  	{value}
		</button>
	)
}
