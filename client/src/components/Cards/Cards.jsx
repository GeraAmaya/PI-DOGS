import React from "react";
import Card from "../Card/Card";

const Cards = (props) => {

    const {dataDogs,onClose} = props;
    return (
        <div>
            {dataDogs.map((char) =>{
                return(
                    <Card
                    id={char.id}
                    key={char.id}
                    img ={char.img}
                    name ={char.name}
                    temperament={char.temperament}
                    weight={char.weight}
                    onClose={onClose}
                    
                    
                    />
                )
            })}
          
        </div>
    )
}


export default Cards;
