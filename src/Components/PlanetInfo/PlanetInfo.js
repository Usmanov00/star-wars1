import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

const PlanetInfo = () => {
  const {id} = useParams()
  const [planet, setPlanet] = useState()
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    axios(`https://swapi.dev/api/planets/${id}`)
      .then((res) => {
        setPlanet(res.data)
        setIsLoading(false)
      })
  }, [id])
  if (isLoading){
    return <Spinner />
  }
  return (
    <>
      <div className="back">
        {
          <Link to={`/planets/`}>
            <button className="btn">Back</button>
          </Link>
        }
      </div>
    <div className="box">
      <div className="img">
      <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""
           className="element-img"/>
      </div>
      <div className="info">
      <div className="info-item">Name: <u><strong>{planet.name}</strong></u></div>
      <div className="info-item">Rotation_period: {planet.rotation_period}</div>
      <div className="info-item">Orbital: {planet.orbital_period}</div>
      <div className="info-item">Diameter: {planet.diameter}</div>
      <div className="info-item">Climate: {planet.climate}</div>
      <div className="info-item">Gravity: {planet.gravity}</div>
      <div className="info-item">Terrain: {planet.terrain}</div>
      <div className="info-item">Surface_water: {planet.surface_water}</div>
      <div className="info-item">Population: {planet.population}</div>
      </div>
    </div>
      <div className="box-btn">
        <span>
          <Link to={`/planets/${+id - 1}`}>
          <button className="btn">Previous</button>
        </Link>
        </span>
        <span>
          <Link to={`/planets/${+id + 1}`}>
          <button className="btn">Next</button>
        </Link>
        </span>
      </div>
    </>
  );
};


export default PlanetInfo;