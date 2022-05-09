import React, {useEffect, useState} from 'react';
import axios from "axios";
import Spinner from "../Spinner";
import {Link} from "react-router-dom";

const Films = () => {

  const [films, setFilms] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(0)

  useEffect(() => {
    axios(`https://swapi.dev/api/films/?page=${page + 1}`)
      .then((res) => {
        setFilms(res.data)
        setIsLoading(false)
      })

  }, [page])
  if (isLoading) {
    return <Spinner/>
  }

  return (

    <div>
      <div className="pagination">
        {
          Array(Math.ceil(films.count / 10)).fill(0).map((buttonNum, idx) => (
            <button key={idx} className="pagination-btn" onClick={() => setPage(idx + 1)}>{idx + 1}</button>
          ))
        }
      </div>
      <div className="row">
        {
          films.results.map((film, index) => (
            <div key={index} className="col-4">
              <Link to={`/films/${10 * +page + (index + 1)}`}>
                <div className="element-item">
                  <img src={`https://starwars-visualguide.com/assets/img/films/${10 * page + index + 1}.jpg`}
                       alt=""
                       className="element-img"/>
                  <h5 className="item">
                    <span>Name: </span>{film.title}
                  </h5>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Films;