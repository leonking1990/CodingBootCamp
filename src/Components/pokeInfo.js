import { extend } from "jquery";
import React from "react";



export default class PokeInfo extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            pokeInfo: {
                height: props.height,
                weight: props.weight,
                pokeType: props.pokeType,
                number: props.number,
                nickName: props.nickName,
            },
            
            
        };
    }

    render(){
        return(
            
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th className="table-light" scope="row">National №:</th>
                        <td className="table-light">{this.props.number}</td>
                    </tr>
                    <tr>
                        <th className="table-secondary" scope="row">Height:</th>
                        <td className="table-secondary">{this.props.height} m</td>
                    </tr>
                    <tr>
                        <th className="table-light" scope="row">Weight:</th>
                        <td className="table-light">{this.props.weight} Kg</td>
                    </tr>
                    <tr>
                        <th className="table-secondary" scope="row">Type:</th>
                        <td className="table-secondary">{this.props.pokeType}</td>
                    </tr>
                </tbody>
                </table>
                
            
        )
    }

}