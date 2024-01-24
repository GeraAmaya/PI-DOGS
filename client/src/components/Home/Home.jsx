import React from 'react';
import style from './Home.module.css';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import AllCards from '../AllCards/AllCards';
import NavBar from '../Navbar/NavBar';
import { getDogs, getByName, getTemperaments } from '../../Redux/actions';




const Home = () => {

    const userName = useSelector((state) => state.userName);

    const dispatch = useDispatch();
    const [searchString, setSearchString] = useState('');  
    const allDogs = useSelector(state => state.dogFilter);


    useEffect(() => {
        window.localStorage.setItem('currentPage', 1) /* para guardar en el navegador la pag donde se encuentra el usuario */
        if (allDogs.length === 0) { /* si el estado es = 0 se despachan las actions */
            dispatch(getDogs())
            dispatch(getTemperaments())
        }
    }, [dispatch])

 

    function handleChange(event) {   
        event.preventDefault();
        setSearchString(event.target.value);
    }

    function handleSubmit(event) { 
        event.preventDefault();
        dispatch(getByName(searchString));
    }

  
    function handleClick(event) {
        event.preventDefault();
        dispatch(getDogs());
    }



    


    return (
        <div className={style.container}>
            <NavBar handleChange={handleChange} handleSubmit={handleSubmit} handleClick={handleClick} />
                
                <div className={style.bienvenida}>
      <h1>Welcome {userName}!, This is our collection of dogs: </h1>

    </div>
            
            <AllCards allDogs={allDogs} />
        </div>
    )
}

export default Home;