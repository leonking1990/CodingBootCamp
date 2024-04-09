import React, { Fragment } from "react";
import { Button, Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import PokeImage from "./pokeImage";


const ENDPOINT = 'https://643c0ef24477945573665884.mockapi.io/savedlist/saves'

export default class MyPokemon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newName: '',
            myPokeData: this.props.data,
            pokeImage: `https://img.pokemondb.net/artwork/vector/large/${this.props.data.name}.png`

        };
    }

    updateNickName(myPokeData) {
        myPokeData.nickName = this.state.newName
        return fetch(`${ENDPOINT}/${myPokeData.id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            // Send your data in the request body as JSON
            body: JSON.stringify(myPokeData)
        }).then(() =>
            this.setState({
                myPokeData: myPokeData

            }))
    }

    render() {

        return (

            <tr key={this.state.myPokeData.id}>
                <td id="tableD">
                    <PokeImage {...{ pokeImage: this.state.pokeImage, typeImage: 'myPokeImage' }} />
                </td>
                <td id="tableD">
                    {this.state.myPokeData.name}
                </td>
                <td id="tableD">
                    {this.state.myPokeData.nickName}
                </td>
                <td id="tableD">
                    {this.state.myPokeData.height / 10} m
                </td>
                <td id="tableD">
                    {this.state.myPokeData.weight / 10} kg
                </td>
                <td id="tableD">
                    {this.state.myPokeData.type}
                </td>
                <td id="tableD">
                    <input onChange={(e) => this.state.newName = e.target.value} placeholder='Enter a nick name'></input>
                    &nbsp;
                    <Button onClick={() => this.updateNickName(this.state.myPokeData)} >Edit</Button>
                    &nbsp;
                    <Button onClick={e => this.props.deletePokemon(e, this.state.myPokeData)}>DELETE</Button>
                </td>
            </tr>

        )
    }
}