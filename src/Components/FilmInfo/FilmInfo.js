import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

const FilmInfo = () => {
  const {id} = useParams()
  const [films, setFilm] = useState()
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    axios(`https://swapi.dev/api/films/${id}`)
      .then((res) => {
        setFilm(res.data)
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
          <Link to={`/films/`}>
            <button className="btn">Back</button>
          </Link>
        }
      </div>
    <div className="box">
      <div className="img">
        <img src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`} alt=""
             className="element-img"/>
      </div>
      <div className="info">
        <div className="info-title"><span>Title: </span>{films.title}</div>
        <div><span className="info-title">Episode: </span>{films.episode_id}</div>
        <div><span className="info-title">Opening crawl: </span> {films.opening_crawl}</div>
        <div><span className="info-title">Director: </span>{films.director}</div>
        <div><span className="info-title">Producer: </span>{films.producer}</div>
        <div><span className="info-title">Release date: </span>{films.release_date}</div>
      </div>
    </div>
      <div className="box-btn">
        <span>
          <Link to={`/films/${+id - 1}`}>
          <button className="btn">Previous</button>
        </Link>
        </span>
        <span>
          <Link to={`/films/${+id + 1}`}>
          <button className="btn">Next</button>
        </Link>
        </span>
      </div>
    </>
  );
};

export default FilmInfo;