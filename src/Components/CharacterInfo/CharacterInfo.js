import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

const CharacterInfo = () => {
  const {id} = useParams()
  const [character, setCharacter] = useState()
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    axios(`https://swapi.dev/api/people/${id}`)
      .then((res) => {
        setCharacter(res.data)
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
          <Link to={`/characters/`}>
            <button className="btn">Back</button>
          </Link>
        }
      </div>
    <div className="box">
      <div className="img">
      <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt=""
           className="element-img"/>
      </div>
      <div className="info">
      <div className="info-item">Name: <u> <strong> {character.name}</strong></u></div>
      <div className="info-item">height: {character.height}</div>
      <div className="info-item">Mass: {character.mass}</div>
      <div className="info-item">Hair_color: {character.hair_color}</div>
      <div className="info-item">Skin_color: {character.skin_color}</div>
      <div className="info-item">Eye_color: {character.eye_color}</div>
      <div className="info-item">Birth_year: {character.birth_year}</div>
      <div className="info-item">Gender: {character.gender}</div>
      </div>
    </div>
      <div className="box-btn">
        <span>
          <Link to={`/characters/${+id - 1}`}>
          <button className="btn">Previous</button>
        </Link>
        </span>
        <span>
          <Link to={`/characters/${+id + 1}`}>
          <button className="btn">Next</button>
        </Link>
        </span>
      </div>
    </>
  );
};

export default CharacterInfo;