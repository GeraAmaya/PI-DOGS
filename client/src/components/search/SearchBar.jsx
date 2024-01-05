import React from 'react';
import style from './Search.module.css';



export default function SearchBar({handleChange, handleSubmit, handleClick}) {

   return (
      <div className={style.container}>
         <form onChange={handleChange} >
            <input className={style.input} type='search' name='search' placeholder='Search breed' />
            <button className={style.beautifulButton} type='submit' onClick={handleSubmit} >
               Search
            </button>
            <button className={style.beautifulButton} onClick={event =>{handleClick(event)}}>All Dogs</button>
         </form>

      </div>
   );
} 
