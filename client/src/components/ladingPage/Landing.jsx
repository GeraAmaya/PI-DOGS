import React, { useState } from 'react';
import { useDispatch } from 'react-redux';  // Asegúrate de importar useDispatch
import { setUserName } from '../../redux/actions'; 
import { useNavigate } from 'react-router-dom';

import style from '../ladingPage/Landing.module.css';



const Landing = () => {
    const [name, setName] = useState(''); 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEnter = () => {
    if (name.trim() !== '') {
      dispatch(setUserName(name));
      navigate('/home');
    } else {
      alert('Please enter your name');
    
    }
  };
return (
    <div className={style.container}>
<div className={style.text}>
    <h1>MY APP DOGS</h1>
 <h4 className={style.h4}>- PI HENRY -</h4>
</div>




<div className={style.form}>
     <div><label htmlFor="name">Enter your name to continue:</label></div> 
      <input
      className={style.input}
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    
    </div>


    <div className={style.contbutton}><button onClick={handleEnter}>ENTER</button></div> 
        

    </div>


    
)
}


export default Landing;





/*

<div className={style.containerButton}>
        <button className={style.button} >
        <a className={style.a} href="/home"><span>ENTER</span></a> 
        </button>  
        </div>
        */