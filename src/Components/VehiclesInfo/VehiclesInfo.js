import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

const VehiclesInfo = () => {
  const {id} = useParams()
  const [vehicles, setVehicles] = useState()
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    axios(`https://swapi.dev/api/vehicles/${id}/`)
      .then((res) => {
        setVehicles(res.data)
        setIsLoading(false)
      })
  }, [id])
  if (isLoading) {
    return <Spinner/>
  }
  return (
    <div className="box">
      <div className="img">
        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`} alt=""
             className="element-img"/>
      </div>
      <div className="info">
        <div className="info-item">Name: <u> <strong> {vehicles.name}</strong></u></div>
        <div className="info-item">height: {vehicles.height}</div>
        <div className="info-item">Mass: {vehicles.mass}</div>
        <div className="info-item">Hair_color: {vehicles.hair_color}</div>
        <div className="info-item">Skin_color: {vehicles.skin_color}</div>
        <div className="info-item">Eye_color: {vehicles.eye_color}</div>
        <div className="info-item">Birth_year: {vehicles.birth_year}</div>
        <div className="info-item">Gender: {vehicles.gender}</div>
      </div>
    </div>
  );
};
export default VehiclesInfo;