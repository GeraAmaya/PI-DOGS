import { useState } from 'react';
import Card from '../cardDog/Card'; //Se importa Card para utilizarala de plantilla para las demas cards
import style from './AllCards.module.css';
import Pagination from '../pagination/Pagination';

export default function Cards({ allDogs }) {

   const [currentPage, setCurrentPage] = useState(
      window.localStorage.getItem('currentPage'));
   const [dogsPage, setdogsPage] = useState(8);
   const lastDog = currentPage * dogsPage;
   const firstDog = lastDog - dogsPage;

   const currentDogs = allDogs.slice(firstDog, lastDog);

   const pagination = (pageNumber) => { /* cambia la pagina actual */ 
      setCurrentPage(pageNumber);
      window.localStorage.setItem('currentPage', pageNumber);
   }


   return (
      <div className={style.divAllCards}>
         

         <div className={style.divCardsL}>

            {
               currentDogs?.map(({ id, image, name, height, weightMin, weightMax, temperament, life_span }) => { 
                  return ( 
                     <Card
                        key={id} //Para uso interno de React para identificar cada Card
                        id={id}
                        image={image}
                        name={name}
                        height={height}
                        weightMin={weightMin}
                        weightMax={weightMax}
                        temperament={temperament}
                        life_span={life_span}
                     />

                     
                  )

               })
               
            }
         </div>

         <Pagination
            dogsPage={dogsPage}
            allDogs={allDogs.length}
            pagination={pagination}
         />

      </div>
   )
}