import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

const SpeciesInfo = () => {
  const {id} = useParams()
  const [species, setSpecies] = useState()
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    axios(`https://swapi.dev/api/species/${id}`)
      .then((res) => {
        setSpecies(res.data)
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
          <Link to={`/species/`}>
            <button className="btn">Back</button>
          </Link>
        }
      </div>
    <div className="box">
      <div className="img">
        <img src={`https://starwars-visualguide.com/assets/img/species/${id}.jpg`} alt=""
             className="element-img"/>
      </div>
      <div className="info">
        <div className="info-title"><span>Name: </span>{species.name}</div>
        <div><span className="info-title">Classification: </span>{species.classification}</div>
        <div><span className="info-title">Designation: </span> {species.designation}</div>
        <div><span className="info-title">Average height: </span>{species.average_height}</div>
        <div><span className="info-title">PSkin color: </span>{species.skin_colors}</div>
        <div><span className="info-title">Hair color: </span>{species.hair_colors}</div>
        <div><span className="info-title">Eye color: </span>{species.eye_colors}</div>
        <div><span className="info-title">Average lifespan : </span>{species.average_lifespan}</div>
        <div><span className="info-title">Home world: </span>{species.homeworld}</div>
        <div><span className="info-title">Language: </span>{species.language}</div>
      </div>
    </div>
      <div className="box-btn">
        <span>
          <Link to={`/species/${+id - 1}`}>
          <button className="btn">Previous</button>
        </Link>
        </span>
        <span>
          <Link to={`/species/${+id + 1}`}>
          <button className="btn">Next</button>
        </Link>
        </span>
      </div>
    </>
  );
};

export default SpeciesInfo;