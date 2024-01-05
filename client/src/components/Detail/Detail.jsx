import React from 'react';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import style from './Detail.module.css';
import { getDetail, getClean  } from '../../redux/actions';
import { Link } from 'react-router-dom';






const Detail = () => {

    const dispatch = useDispatch();
    
    const detail = useSelector((state) => state.dogDetail) /* me subscribo al subestado dogDetail */
    const { id } = useParams();

    useEffect(() => {
        dispatch(getDetail(id))
        }, [id])

   
    return (
        <div className={style.container}>
            <div className={style.info} >
                <h3>{detail?.name} </h3>
                <h5>Temperaments: {detail?.temperament}</h5>
                <h5>Weight Min: {detail?.weightMin} KG</h5>
                <h5>Weight Max: {detail?.weightMax} KG</h5>
                <h5>Height: {detail?.height} CM</h5>
                <h5>Life span: {detail?.life_span}</h5>
                <h5>Id:{id}</h5>
              
               <button className={style.beautifulButton} ><Link className={style.link} to='/home' > Home</Link></button> 
                    
               
            </div>
            <div className={style.containerImg} >
                <img className={style.imgDetail} src={detail?.image} alt={detail?.name} />
            </div>
          
        </div>
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