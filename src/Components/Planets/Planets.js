import React, {useEffect, useState} from 'react';
import axios from "axios";
import Spinner from "../Spinner";
import {Link} from "react-router-dom";


const Planets = () => {
  const [planets, setPlanets] = useState({})
  const [page, setPage] = useState(0)

  useEffect(() => {
    axios(`https://swapi.dev/api/planets/?page=${page + 1}`)
      .then((res) => setPlanets(res.data))

  }, [page])

  if (!planets.results) {
    return <Spinner />
  }

  return (
    <div>
      <div className="pagination-box">
        {
          <Link to={`/`}>
            <button>Back</button>
          </Link>
        }
        <div className="pagination">
          {
            Array(Math.ceil(planets.count / 10)).fill(0).map((buttonNum, idx) => (
              <button key={idx} className="pagination-btn" onClick={() => setPage(idx + 1)}>{idx + 1}</button>
            ))
          }
        </div>
      </div>
      <div className="row">
        {
          planets.results.map((planet, index) => (
            <div key={index} className="col-4">
              <Link to={`/planets/${10 * + page +index + 1}`}>
                <div className="element-item">
                  <img src={`https://starwars-visualguide.com/assets/img/planets/${10 * page + index + 1}.jpg`} alt=""
                       className="element-img"/>
                  <h5 className="item">
                    <span>Name: </span>{planet.name}
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

export default Planets;