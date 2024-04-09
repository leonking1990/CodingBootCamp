import React, { Fragment } from 'react';
import { Button, Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import MyPokemon from "./myPokemon";
import NavBar from './navBar';

const ENDPOINT = 'https://643c0ef24477945573665884.mockapi.io/savedlist/saves'

export default class MySavedList extends React.Component {
    constructor(props) {
        super(props);
        this.deletePokemon = this.deleteThisPokemon.bind(this);

    }

    render() {

        const myPokeData = this.state
            ? this.state.myPokeData.map((myPokemon, index) =>
                <MyPokemon
                    key={index}
                    data={myPokemon}
                    deletePokemon={this.deletePokemon} />)
            : null;

        return (
            <Fragment>
                <div className='container'>
                    <NavBar />
                    <div style={{ margin: "10rem" }}>
                        <Table striped bordered hover size='sm'>
                            <thead>
                                <tr>
                                    <th id="tableH">

                                    </th>
                                    <th id="tableH">
                                        Name
                                    </th>
                                    <th id="tableH">
                                        Nick Name
                                    </th>
                                    <th id="tableH">
                                        Height
                                    </th>
                                    <th id="tableH">
                                        Weight
                                    </th>
                                    <th id="tableH">
                                        Type
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {myPokeData}
                            </tbody>
                        </Table>
                        <br>

                        </br>

                    </div>
                </div>
            </Fragment>
        )
    }
    componentDidMount() {
        fetch(ENDPOINT)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    myPokeData: data
                });
            });
    }

    deleteThisPokemon(e, myPokeData,) {
        console.log(this.state.myPokeData)
        const index = this.state.myPokeData.indexOf(myPokeData);
        console.log(this.state.myPokeData)
        this.state.myPokeData.splice(index, 1)
        DeleteEmployee(myPokeData)
            .then(() => {
                this.setState(state => {
                    for (let em of state.myPokeData) {
                        if (em.id === myPokeData.id) {
                            let em = myPokeData;
                            break;
                        }
                    }
                    return state;
                });
            });
        e.preventDefault();
    }


}

function DeleteEmployee(myPokeData) {
    return fetch(`${ENDPOINT}/${myPokeData.id}`, {
        method: 'DELETE',
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
    })

}