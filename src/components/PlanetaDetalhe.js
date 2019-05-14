import React from 'react';
import './PlanetaDetalhe.css'

const PlanetaDetalhe = ({name, population, climate, terrain, films, id, handleIdChange}) => {
  let page = films ? <p><span>Featured in:</span> {films.map((film) => <li>{film} </li> )}</p> : null;
  return (
    <section>
      <div className="PlanetaDetalhe">
        <h1 className="PlanetaNome">{name}</h1>
        <p><span>Population:</span> {population}</p>
        <p><span>Climate:</span> {climate}</p>
        <p><span>Terrain:</span> {terrain}</p>
        {page}
      </div>
      <button data-id={id} onClick={handleIdChange} className="BtnPlaneta">N E X T</button>
    </section>
  )
};

export default PlanetaDetalhe;