import React from 'react';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import style from './Detail.module.css';
import { getDetail, getClean  } from '../../redux/actions';
import HeaderDetail from '../header/HeaderDetail';






const Detail = () => {

    const dispatch = useDispatch();
    
    const detail = useSelector((state) => state.dogDetail) /* me subscribo al subestado dogDetail */
    const { id } = useParams();

   // useEffect(() => {
   //     dispatch(getDetail(id))
   //     }, [id])

   
   useEffect(() => {
    dispatch(getDetail(id))

    return () => {
        dispatch(getClean()); /* Al desmontar el componente se despacha getClean para limpiar el estado dogDetail */
    }
}, [id])
   
    return (
        <>
        <HeaderDetail/>

        <div className={style.container}>
            <div className={style.info} >
                <h1 className={style.h1} >{detail?.name} </h1>
                <h3>Temperaments: {detail?.temperament}</h3>
                <h3>Weight Min: {detail?.weightMin} KG</h3>
                <h3>Weight Max: {detail?.weightMax} KG</h3>
                <h3>Height: {detail?.height} CM</h3>
                <h3>Life span: {detail?.life_span}</h3>
                <h4>Id:{id}</h4>
              

                    
               
            </div>
            <div className={style.containerImg} >
                <img className={style.imgDetail} src={detail?.image} alt={detail?.name} />
            </div>
          
        </div>
        </>
    )
}

export default Detail;




/*



<div>
                <img src={detail?.image} alt={detail?.name} className={style.imgDetail} />
            </div>
            <div className={style.divCont}>
                <div className={style.divTxD}>
                    <h3 className={style.h3d}>Name: {detail?.name}</h3> {/*  Con ? estamos haciendo un renderizado condicional para que el codigo no se rompa en lo que carga la info de la API */
                   /* </div>
                    <div className={style.divTxD}>
                        <h3 className={style.h3d}>Height: {detail?.height} cm</h3>
                    </div>
                    <div className={style.divTxD}>
                        <h3 className={style.h3d}>Weight Min: {detail?.weightMin} Kg</h3>
                    </div>
                    <div className={style.divTxD}>
                        <h3 className={style.h3d}>Weight Max:{detail?.weightMax} Kg</h3>
                    </div>
                    <div className={style.divTxD}>
                        <h3 className={style.h3d}>Temperament: {detail?.temperament}</h3>
                    </div>
                    <div className={style.divTxD}>
                        <h3 className={style.h3d}>Life_Span: {detail?.life_span}</h3>
                    </div>
    
                        <Link to='/home'  className={style.linkReturn}> Home</Link>
    
                </div>

                */