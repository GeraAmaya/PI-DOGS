import React from "react";
import style from './pagination.module.css';

const Pagination = ({ allDogs, pagination, dogsPage, currentPage }) => {
  const totalPages = Math.ceil(allDogs / dogsPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageClick = (pageNumber) => {
    pagination(pageNumber);
    window.scrollTo({ top: 320, behavior: 'smooth' });
  };

  return (
    <div className={style.container}>
      <div className={style.divPage}>

        {/* boton para volver al principio*/}
        <button
          className={style.buttonPage1}
          onClick={() => handlePageClick(1)}
          disabled={currentPage === 1}
        >
          FIRST
        </button>

        {/*boton para el paginado*/}

        {pageNumbers?.map((pageNumber) => (
          <div key={pageNumber}>
            <button
              className={`${style.buttonPage} ${currentPage === pageNumber ? style.selectedPage : ''}`}
              onClick={() => handlePageClick(pageNumber)}
            >
              {pageNumber}
            </button>
          </div>
        ))}

{/*boton para ir a la ultima pagina*/}
        <button
          className={style.buttonPage1}
          onClick={() => handlePageClick(totalPages)}
          disabled={currentPage === totalPages}
        >
          LAST
        </button>
      </div>
    </div>
  );
}

export default Pagination;








