import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
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
    <div className="box">
      <div className="img">
      <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""
           className="element-img"/>
      </div>
      <div className="info">
      <div>Name: {planet.name}</div>
      <div>Name: {planet.rotation_period}</div>
      <div>Name: {planet.orbital}</div>
      <div>Name: {planet.diameter}</div>
      <div>Name: {planet.clime}</div>
      <div>Name: {planet.gravity}</div>
      <div>Name: {planet.terrian}</div>
      <div>Name: {planet.surface_water}</div>
      <div>Population: {planet.population}</div>
      </div>
    </div>
  );
};


export default PlanetInfo;