import React, {useEffect, useState} from 'react';
import axios from "axios";
import Spinner from "../Spinner";
import {Link} from "react-router-dom";


const Species = () => {
  const [species, setSpecies] = useState({})
  const [page, setPage] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios(`https://swapi.dev/api/species/?page=${page + 1}`)
      .then((res) => {
        setSpecies(res.data)
        setIsLoading(false)
      })

  }, [page])

  if (isLoading) {
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
            Array(Math.ceil(species.count / 10)).fill(0).map((buttonNum, idx) => (
              <button key={idx} className="pagination-btn" onClick={() => setPage(idx + 1)}>{idx + 1}</button>
            ))
          }
        </div>
      </div>
      <div className="row">
        {
          species.results.map((specie, index) => (
            <div key={index} className="col-4">
              <Link to={`/species/${10 * +page +index + 1}`}>
                <div className="element-item">
                  <img src={`https://starwars-visualguide.com/assets/img/species/${10 * page +index + 1}.jpg`} alt=""
                       className="element-img"/>
                  <h5 className="item">
                    {specie.name}
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

export default Species;