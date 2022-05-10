import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

  const SpeciesInfo = () => {
    const {id} = useParams()
    const [starship, setStarship] = useState()
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
      axios(`https://swapi.dev/api/starships/${id}`)
        .then((res) => {
          setStarship(res.data)
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
            <Link to={`/vehicles/`}>
              <button className="btn">Back</button>
            </Link>
          }
        </div>
      <div className="box">
        <div className="img">
          <img src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} alt=""
               className="element-img"/>
        </div>
        <div className="info">
          <div className="info-item">Name: <u> <strong> {starship.name}</strong></u></div>
          <div className="info-item">Model: {starship.model}</div>
          <div className="info-item">Manufacturer: {starship.manufacturer}</div>
          <div className="info-item">Cost_in_credits: {starship.cost_in_credits}</div>
          <div className="info-item">Length: {starship.length}</div>
          <div className="info-item">Max_atmosphering_speed: {starship.max_atmosphering_speed}</div>
          <div className="info-item">Crew: {starship.crew}</div>
          <div className="info-item">Passengers: {starship.passengers}</div>
          <div className="info-item">Cargo_capacity: {starship.cargo_capacity}</div>
          <div className="info-item">Consumables: {starship.consumables}</div>
          <div className="info-item">Hyperdrive_rating: {starship.hyperdrive_rating}</div>
          <div className="info-item">MGLT: {starship.MGLT}</div>
          <div className="info-item">Starship_class: {starship.starship_class}</div>
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


export default SpeciesInfo;