import React from 'react';
import {Link} from "react-router-dom";
import './HomePage.css'
import characters from '../../assets/images/character.jpeg'
import films from '../../assets/images/films.jpeg'
import planets from '../../assets/images/planets.jpeg'
import species from '../../assets/images/species.jpeg'
import starships from '../../assets/images/starships.jpeg'
import vehicles from '../../assets/images/vehicles.jpeg'


const HomePage = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="type">
              <h2 className="title-img characters-color">Characters</h2>
              <Link to="/characters">
                <div className="category-item">
                  <img src={characters} alt=""/>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-4">
            <div className="type">
              <h2 className="title-img films-color">Films</h2>
              <Link to="/films">
                <div className="category-item">
                  <img src={films} alt=""/>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-4">
            <div className="type">
              <h2 className="title-img species-color">Species</h2>
              <Link to="/species">
                <div className="category-item ">
                  <img src={species} alt=""/>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-4">
            <div className="type">
              <h2 className="title-img starships-color">Starships</h2>
              <Link to="/starships">
                <div className="category-item ">
                  <img src={starships} alt=""/>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-4">
            <div className="type">
              <h2 className="title-img vehicles-color">Vehicles</h2>
              <Link to="/vehicles">
                <div className="category-item">
                  <img src={vehicles} alt=""/>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-4">
            <div className="type">
              <h2 className="title-img planets-color">Planets</h2>
            <Link to="/planets">
              <div className="category-item">
                <img src={planets} alt=""/>
              </div>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;