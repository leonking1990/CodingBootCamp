import React from 'react';

export default class Movie extends React.Component{
    render(){
        return(
            
            <div id='moviebox'>
                <div>
                    
                </div>
                <div  id='card' className="card">
                    <img src="https://th.bing.com/th/id/OIF.0jggwC37FJjwc38Vnk8VlA?pid=ImgDet&rs=1" className="card-img-top"></img>
                    <div className='card-body'>
                        <h5 className='card-title'></h5>
                        <p className='car-text'>
                        John Wick uncovers a path to defeating The High Table. 
                        But before he can earn his freedom, Wick must face off against a new enemy 
                        with powerful alliances across the globe and forces that turn old friends into foes.
                        </p>
                    </div>
                    
                </div>
            </div>
                    
                
        );
    }
}