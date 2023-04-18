import React, { Fragment } from "react";
import { Button, Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from 'react-router-dom'
import NavBar from "./navBar";

export default class HomePage extends React.Component {


    render() {

        return (
            <Fragment>
                <div className="container">
                    <NavBar />
                    <br></br><br></br>
                    <div className="row">
                        <div id="homeCol" className="col">
                            <img id="homeTileMP" src="https://purepng.com/public/uploads/large/purepng.com-pokeballpokemonpocket-monsterspokemon-franchisefictional-speciesone-pokemonmany-pokemonone-pikachu-1701527787000ukvgo.png" />
                            &nbsp;
                            <Link className='d-grid gap-2' to={"/myPokemon"}>
                                <Button size='lg'>my pokemon</Button>
                            </Link>
                        </div>
                        &nbsp;&nbsp;&nbsp;
                        <div id="homeCol" className="col">
                            <img id="homeTile" src="https://th.bing.com/th/id/R.8ffa205de0236180be70d2e399bc2359?rik=90CLVoX19nkV2Q&riu=http%3a%2f%2fimg2.wikia.nocookie.net%2f__cb20100717083156%2fpokemon%2fimages%2f1%2f1f%2fPokedex_FRLG.png&ehk=3xuHai9RF%2bfKIU3qTjYFaUh9uku8X2DQ5mFuK6%2bcmiY%3d&risl=&pid=ImgRaw&r=0" />
                            &nbsp;
                            <Link className='d-grid gap-2' to={"/pokedex"}>
                                <Button size='lg'>PokeDex</Button>
                            </Link>
                        </div>
                    </div>
                    <br></br><br></br>
                    <div id="homeRow" className="row">
                        <div id="homeCol" className="col">
                            <img id="homeTile" src="https://i.imgur.com/irawLeM.jpg?1" />
                            <h3 className="center">Coming soon!</h3>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}