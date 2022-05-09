import React, {useEffect, useState} from 'react';
import axios from "axios";
import Spinner from "../Spinner";
import {Link} from "react-router-dom";


const Vehicles = () => {
  const [vehicles, setVehicles] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(0)

  useEffect(() => {
    axios(`https://swapi.dev/api/vehicles/?page=${page + 1}`)
      .then((res) => {
        setVehicles(res.data)
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
          Array(Math.ceil(vehicles.count / 10)).fill(0).map((buttonNum, idx) => (
            <button key={idx} className="pagination-btn" onClick={() => setPage(idx + 1)}>{idx + 1}</button>
          ))
        }
      </div>
      <div className="row">
        {
          vehicles.results.map((vehicle, index) => (
            <div key={index} className="col-4">
              <Link to={`/vehicles/${10 * +page + (index + 1)}`}>
                <div className="element-item">
                  <img src={`https://starwars-visualguide.com/assets/img/vehicles/${10 * page + index + 1}.jpg`}
                       alt=""
                       className="element-img"/>
                  <h5 className="item">
                    <span>Name: </span>{vehicle.name}
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



export default Vehicles;