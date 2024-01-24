import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import style from './Detail.module.css';
import { getDetail, getClean } from '../../Redux/actions';
import HeaderDetail from '../Header/HeaderDetail';

const Detail = () => {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.dogDetail);
  const { id } = useParams();

  // Función para hacer scroll hacia arriba
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Hacer scroll hacia arriba al montar el componente
    scrollToTop();
    
    // Iniciar la carga de detalles
    dispatch(getDetail(id));

    // Limpieza al desmontar el componente
    return () => {
      dispatch(getClean());
    };
  }, [id]);

  return (
    <>
      <HeaderDetail />
      <div className={style.container}>
        <div className={style.cardDetail}>
          <div className={style.info}>
            <h1 className={style.h1}>{detail?.name}</h1>
            <h3>Temperaments: {detail?.temperament}</h3>
            <h3>Weight Min: {detail?.weightMin} KG</h3>
            <h3>Weight Max: {detail?.weightMax} KG</h3>
            <h3>Height: {detail?.height} CM</h3>
            <h3>Life span: {detail?.life_span}</h3>
            <h3>Id:{id}</h3>
          </div>
          <div className={style.containerImg}>
            <img className={style.imgDetail} src={detail?.image} alt={detail?.name} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
