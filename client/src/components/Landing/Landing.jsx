import React from "react";
import {NavLink} from 'react-router-dom'

const Landing = () => {
return (
    <div>
    <div>Soy la landing</div>
    <NavLink to={'/home'}> 
    <button>Al Home</button>    
    </NavLink> 
    </div>
)
}


export default Landing;