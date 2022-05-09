import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
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
    <>
      <div className="back">
        {
          <Link to={`/vehicles/`}>
            <button className="btn">Back</button>
          </Link>
        }
      </div>
      <div className="box">
        <div className="img">
          <img src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`} alt=""
               className="element-img"/>
        </div>
        <div className="info">
          <div className="info-item">Name: <u> <strong> {vehicles.name}</strong></u></div>
          <div className="info-item">Model: {vehicles.model}</div>
          <div className="info-item">Manufacturer: {vehicles.manufacturer}</div>
          <div className="info-item">Cost_in_credits: {vehicles.cost_in_credits}</div>
          <div className="info-item">Crew: {vehicles.crew}</div>
          <div className="info-item">Passengers: {vehicles.passengers}</div>
          <div className="info-item">Cargo_capacity: {vehicles.cargo_capacity}</div>
          <div className="info-item">Consumables: {vehicles.consumables}</div>
          <div className="info-item">Vehicle_class: {vehicles.vehicle_class}</div>
        </div>
      </div>
      <div className="box-btn">
        <span>
          <Link to={`/vehicles/${+id - 1}`}>
          <button className="btn">Previous</button>
        </Link>
        </span>
        <span>
          <Link to={`/vehicles/${+id + 1}`}>
          <button className="btn">Next</button>
        </Link>
        </span>
      </div>
    </>
  );
};
export default VehiclesInfo;