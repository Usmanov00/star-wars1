import React from 'react';
import HomePage from "./Components/HomePage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Films from "./Components/Films";
import Species from "./Components/Species";
import Characters from "./Components/Characters";
import Header from "./Components/Header";
import Starships from "./Components/Starships";
import Vehicles from "./Components/Vehicles";
import Planets from "./Components/Planets";
import FilmInfo from "./Components/FilmInfo"
import PlanetInfo from "./Components/PlanetInfo";
import CharacterInfo from "./Components/CharacterInfo";
import SpeciesInfo from "./Components/SpeciesInfo";
import StarshipInfo from "./Components/StarshipInfo";
import VehiclesInfo from "./Components/VehiclesInfo";




const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<CharacterInfo />} />
          <Route path="/films" element={<Films />} />
          <Route path="/films/:id" element={<FilmInfo />} />
          <Route path="/species" element={<Species />} />
          <Route path="/species/:id" element={<SpeciesInfo />} />
          <Route path="/starships" element={<Starships />} />
          <Route path="/starships/:id" element={StarshipInfo} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/vehicles/:id" element={VehiclesInfo}/>
          <Route path="/planets" element={<Planets />} />
          <Route path="/planets/:id" element={<PlanetInfo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
