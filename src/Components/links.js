import React from "react";
import { Link } from "react-router-dom";

export default class Links extends React.Component {

    render() {

        return (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/pokedex">PokeDex</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/myPokemon">My Pokemon</Link>
                </li>
            </ul>
        )
    }
}
