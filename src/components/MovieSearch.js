import React, { useState } from "react";

export default function MovieSearch(props) {
  const [state, setState] = useState([])

  const handleChange = (e) => {
    setState(e.target.value);
    console.log(state);
  };

  const handleClick = (e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${"e965adc31d877d6a743cb35c22347795"}&language=en-US&query=${state}`)
      .then((res) => res.json())
      .then((res) => props.setData(res));
  };

  return (
    <form>
      <input type="text" placeholder="holaMundo" value={state} onChange={handleChange} />
      <button className="green" onClick={handleClick} >CLICK</button>
    </form>
  );
}
