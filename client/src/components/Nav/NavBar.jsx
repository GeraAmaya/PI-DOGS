import React from "react";
import style from '../Nav/NavBar.module.css'
import PATHROUTES from "../Helpers/PathRoutes";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

const NavBar = () => {
    return (
        <div className={style.container}>

        <Link to={PATHROUTES.HOME}>HOME</Link>
        <Link to={PATHROUTES.CREATE}>CREATE YOU DOG</Link>

        <Search/>
          
        </div>
    )
}


export default NavBar;