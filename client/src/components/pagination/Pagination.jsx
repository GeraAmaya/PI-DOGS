import React from "react";
import style from './pagination.module.css';


function Pagination({allDogs, pagination, dogsPage}){
    
    const pageNumbers =[];

    for(let i = 1; i <= Math.ceil(allDogs/dogsPage); i++){  /* Para saber el numero de paginas que debe crear */
        pageNumbers.push(i)
    }

    return(
        <div>
            <div className={style.divPage}>
                {
                    pageNumbers?.map((pageNumber) => {  /* recorre el pageNumber y crea un boton por pagina */
                        return(
                            <div  key={pageNumber}>
                                <button className={style.buttonPage} onClick={() => pagination(pageNumber)}>{pageNumber}</button>
                                       {/* pagination es la funcion pasada por parametro desde alllCards */}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default Pagination;

