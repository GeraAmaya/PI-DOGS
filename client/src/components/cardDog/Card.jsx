import React from 'react';
import { Link } from 'react-router-dom';
import style from './Card.module.css';


const Card = ({ id, image, name, height, weightMin, weightMax, temperament, life_span }) =>{
    return (
        <div className={style.divCar}>
            
           <Link to={`/detail/${id}`} className={style.linkCard}> <img src={image}  /></Link>
            
                <h2 className={style.h2}>{name}</h2> 
            
            <div className={style.divh3}>
                <h3 className={style.titulos}>Min.Weight:</h3>
                <h3 className={style.h3Card}>{weightMin} Kg</h3>
            </div>
            <div className={style.divh3}>
                <h3 className={style.titulos}>Max.Weight:</h3>
                <h3 className={style.h3Card}>{weightMax} Kg</h3>
            </div>
            <div className={style.divh3}>
                <h3 className={style.titulos}>Temperament: </h3>
                <h3 className={style.h3Card}>{temperament}</h3>
            </div>
        </div>
    )
}

export default Card;