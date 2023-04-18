import React, { useCallback, useEffect, useState, Fragment } from "react";
import { Button, Table } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { Link, useNavigate } from 'react-router-dom'
import PokeImage from './pokeImage';
import PokeStats from './pokeStats';
import PokeInfo from "./pokeInfo";
import NavBar from "./navBar";

const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/';
const serverPoint = 'https://643c0ef24477945573665884.mockapi.io/savedlist/saves'

export default class PokeDex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchStr: '',
            pokeData: '',
            stats: {
                hp: 0,
                attack: 0,
                defense: 0,
                sAttack: 0,
                sDefense: 0,
                speed: 0,
            },
            pokeInfo: {
                height: 0,
                weight: 0,
                pokeType: 0,
                number: 0,
                nickName: '',
            },
            pokeImage: 'https://purepng.com/public/uploads/large/purepng.com-pokeballpokeballdevicepokemon-ballpokemon-capture-ball-1701527825789urzm0.png',
            title: 'Who\'s that PokeMon?'
        };
    }

    render() {
        console.log(this.state.pokeInfo)
        let grid = <PokeStats {...this.state.stats} />
        return (
            <Fragment>
                <div className="container">
                    <NavBar />
                    <br></br><br></br>
                    <h1 className="center">{this.state.title}</h1>
                    <br></br><br></br>
                    <div className="container text-center">
                        <div id="row" className="row">
                            <div id="col" className="col-8">
                                <PokeImage {...{ pokeImage: this.state.pokeImage, typeImage: 'pokeImage' }} />
                            </div>
                        </div>
                        <br></br><br></br>
                        <div id="row" className="row">
                            <div id="col" className="col">
                                <input onChange={(e) => this.state.searchStr = e.target.value} placeholder='Enter a Pokemon'></input>
                                <br></br><br></br>
                                <Button onClick={() => this.searchPokemon()} >Search</Button>
                                &nbsp;
                                <Button onClick={() => this.addPokemon(this.state.pokeData)} >Add</Button>
                                <br></br><br></br>
                            </div>
                        </div>
                        <br></br><br></br>
                    </div>
                    <div className="d-flex flex-row">
                        <div id="col" className="p-2"> <PokeStats {...this.state.stats} /> </div>
                        <div id="col" className="p-2"> <PokeInfo {...this.state.pokeInfo} /> </div>
                    </div>

                </div>
            </Fragment>
        )
    }

    searchPokemon = () => {
        fetch(`${ENDPOINT}/${this.state.searchStr}`)
            .then(res => res.json())
            .then(data => {
                if (data.types.length > 1) {
                    this.pokeTypes = data.types[0].type.name + '/' + data.types[1].type.name
                    console.log(data.types.length)
                }
                else {
                    this.pokeTypes = data.types[0].type.name
                    console.log(data.types.length)
                }
                console.log(this.pokeTypes)
                this.setState({
                    pokeData: data,
                    pokeImage: `https://img.pokemondb.net/artwork/vector/large/${data.name}.png`,
                    title: data.name,
                    stats: {
                        hp: data.stats[0].base_stat,
                        attack: data.stats[1].base_stat,
                        defense: data.stats[2].base_stat,
                        sAttack: data.stats[3].base_stat,
                        sDefense: data.stats[4].base_stat,
                        speed: data.stats[5].base_stat,
                    },
                    pokeInfo: {
                        height: data.height / 10,
                        weight: data.weight / 10,
                        pokeType: this.pokeTypes,
                        number: data.id,
                        nickName: "",
                    },
                });
            });
    }

    addPokemon = (e) => {
        console.log(e.name)
        if (e.types.length > 1) {
            this.pokeTypes = e.types[0].type.name + '/' + e.types[1].type.name
        }
        else {
            this.pokeTypes = e.types[0].type.name
        }
        fetch(serverPoint, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            // Send your data in the request body as JSON
            body: JSON.stringify({
                'id': e.id,
                'name': e.name,
                'height': e.height,
                'weight': e.weight,
                'type': this.pokeTypes,
                'nickname': ""
            })
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
        }).then(task => {
            // do something with the new task

        }).catch(error => {
            // handle error
        })
    }
};



