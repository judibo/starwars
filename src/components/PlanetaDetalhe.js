import React from 'react';
import './PlanetaDetalhe.css'

const PlanetaDetalhe = ({nFilms, name, population, climate, terrain, id, handleIdChange}) => {
  return (
    <section>
      <div className="PlanetaDetalhe">
        <h1 className="PlanetaNome">{name}</h1>
        <p><span>Population:</span> {population}</p>
        <p><span>Climate:</span> {climate}</p>
        <p><span>Terrain:</span> {terrain}</p>
        <p><span>Featured In:</span> {nFilms} movies</p>
      </div>
      <button data-id={id} onClick={handleIdChange} className="BtnPlaneta">NEXT</button>
    </section>
  )
};

export default PlanetaDetalhe;