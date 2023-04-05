import React from 'react';

export default class NavBar extends React.Component{
    render(){
        return(
            
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                    </li>
                     </ul>
                     <a id="centerIcon" className="navbar-brand" href="" ><img src="https://th.bing.com/th/id/OIP.19eOcs_L9HWel9NYlfZZrwHaHa?pid=ImgDet&rs=1" alt=""  height="60" width="60"></img></a>
            </div>
        </nav>
                    
                
        );
    }
}