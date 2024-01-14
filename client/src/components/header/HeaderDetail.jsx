import React from 'react'
import { Link } from 'react-router-dom';
import style from './HeaderDetail.module.css';

const HeaderDetail = () => {
  return (
    <div className={style.header2} >

      <div className={style.containerButon} >
      <button className={style.beautifulButton} > <Link to='/home' className={style.link}>HOME</Link></button>
      </div>
    <div className={style.text} >
      <h1 className={style.h1}>DETAIL DOG</h1>
      </div>


      
    </div>
  )
}

export default HeaderDetail