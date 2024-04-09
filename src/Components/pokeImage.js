import React from "react";


export default class PokeImage extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            pokeImage: props.pokeImage,
            typeImage: props.typeImage,
        };
    }
    
    render(){
        console.log(this.props.pokeImage)
        return(
            <div>
                <img id={this.props.typeImage} src={this.props.pokeImage}/>
            </div>
        )
    }
    searchPokemon(){
        

    }
}