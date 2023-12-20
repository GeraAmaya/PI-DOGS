import React from "react";
import style from '../Nav/NavBar.module.css'
import PATHROUTES from "../Helpers/PathRoutes";
import { NavLink } from "react-router-dom";
import Search from "../Search/Search";

const NavBar = (props) => {
    const {onSearch} = props ;
    return (
        <div className={style.container}>
  
       <NavLink to={PATHROUTES.HOME} style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "black",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}>HOME</NavLink>
  
        <NavLink to={PATHROUTES.CREATE} style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "black",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}>CREATE YOU DOG</NavLink>
    

    <NavLink to={PATHROUTES.FAVORITES} style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "black",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}>FAVORITES</NavLink>


        <Search onSearch={onSearch}/>
          
        </div>
    )
}


export default NavBar;