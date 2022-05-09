import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
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
      <div>
        <img src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} alt=""
             className="element-img"/>
        <div>{starship.title}</div>

        <br/>
        {starship.opening_crawl}
      </div>
    );
  };


export default SpeciesInfo;