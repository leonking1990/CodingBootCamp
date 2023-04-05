import React from 'react';

export default class LikeButton extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            count: 0,
            Likes: 'likes'
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(){
        if(this.state.count <= 0)
        {
            this.setState(state => ({count: state.count = 1}));
        }
        else
        this.setState(state => ({count: state.count = 0}));
    }

    render(){
        
        return(
            <button className ="btn btn-primary" onClick={this.handleClick}>
                {this.state.count} {this.state.Likes}
            </button>
        );
        
    }
}