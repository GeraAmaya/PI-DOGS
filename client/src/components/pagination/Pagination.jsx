import React from "react";
import style from './pagination.module.css';

const  Pagination = ({ allDogs, pagination, dogsPage, currentPage }) => {
  const totalPages = Math.ceil(allDogs / dogsPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className={style.container}>
      <div className={style.divPage}>
        <button
          className={style.buttonPage1}
          onClick={() => pagination(1)}
          disabled={currentPage === 1}
        >
          FIRST
        </button>

        {pageNumbers?.map((pageNumber) => (
          <div key={pageNumber}>
            <button
              className={style.buttonPage}
              onClick={() => pagination(pageNumber)}
            >
              {pageNumber}
            </button>
          </div>
        ))}

        <button
          className={style.buttonPage1}
          onClick={() => pagination(totalPages)}
          disabled={currentPage === totalPages}
        >
          LAST
        </button>
      </div>
    </div>
  );
}

export default Pagination;


