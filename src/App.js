import './App.css';
import ReactDOM from "react-dom"
import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Link, useRouteMatch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './Components/navBar';
import PokeDex from './Components/PokeDex';
import PokeStats from './Components/pokeStats';
import MySavedList from './Components/mySavedList';
import HomePage from './Components/homePage';


export default function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/myPokemon' element={<MySavedList />} />
          <Route path='/pokedex' element={<PokeDex />} />
        </Routes>
      </Router>

    </div>
  );
}
