import React from "react";
import style from '../ladingPage/Landing.module.css';


const Landing = () => {
return (
    <div className={style.container}>

        <div className={style.containerButton}>
        <button className={style.button} >
        <a className={style.a} href="/home"><span>ENTER</span></a> 
        </button>   

    </div>


    </div>
)
}


export default Landing;