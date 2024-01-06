import { useDispatch, useSelector } from 'react-redux';
import style from './CreateDog.module.css';
import { useState, useEffect } from 'react';
import validate from '../validation/validationInputs';
import validateSubmit from '../validation/validationSubmit';
import { getDogs, postDog, getTemperaments } from '../../redux/actions';
import { Link } from 'react-router-dom';
import Header from '../header/header';


const CreateDog = () => {


    const allTemperaments = useSelector(state => state.temperaments);
    const dispatch = useDispatch();
    
    // crear un estado local para guardar las respuestas
    const [state, setState] = useState({
        image: "",
        name: "",
        heightMin: 0,
        heightMax: 0,
        weightMin: 0,
        weightMax: 0,
        temperament: [],
        life_span: 0,

    });

    const [errors, setErrors] = useState({
        temperament: "You must select at least one temperament"
    });

    useEffect(() => {
        dispatch(getTemperaments())

        return () => dispatch(getDogs());
    }, [dispatch])


    const handleChange = (event) => {
        event.preventDefault();
        
        // Para modificar los sub-estados segun corresponda menos temperaments
        setState({
            ...state,
            [event.target.name]: event.target.value
        })

        // Para agregar varios elementos al array(state) de temperaments
        if (event.target.name === "temperament") {
            if (state.temperament.includes(event.target.value)) return;  /* para que no agregar temperamentos repetidos al perro */
            setState({
                ...state,
                [event.target.name]: [...state[event.target.name], event.target.value]
            })
        }

        setErrors(validate({ /*cada que se haga una modificación se valide lo que se escriba */
            ...state,
            [event.target.name]: event.target.value
        }, event.target.name, errors))
    }

    const remove = (event) => {

        setState({
            ...state,
            temperament: [...state[event.target.name].filter(temp => temp !== event.target.id)]
        })

        setErrors(validate({ /*Se valida aquí támbien xq se esta modificando el state temperaments por lo tanto necesita evaluarse*/
        ...state,
        temperament: [...state[event.target.name].filter(temp => temp !== event.target.id)]
    }, event.target.name, errors))
    }

    // Para el botón de Posteo
    const handleSubmit =(event) =>{
        event.preventDefault();
        dispatch(postDog(state))
    }




    return (
        <>
        <Header/>
        <div className={style.divContForm}>
            <div className={style.divForm}>
                <form onSubmit={handleSubmit}>
                    <h2 className={style.h2Form}>CREATE YOUR DOG</h2>

                    <div className={style.divInputs}>
                        <label className={style.label} htmlFor="image">Image: </label>
                        <input onChange={handleChange} className={style.input1} type="text" name='image' />
                        {errors.image && <p >{errors.image}</p>}


                        <label className={style.label} htmlFor="name">Name: </label>
                        <input onChange={handleChange} className={style.input1} type="text" name='name' />
                        {errors.name && <p>{errors.name}</p>}


                        <label className={style.label} htmlFor="heightMin">Height Min: </label>
                        <input onChange={handleChange} className={style.input1} type="text" name='heightMin' />
                        {errors.heightMin && <p>{errors.heightMin}</p>}
                        {errors.especial1 && <p>{errors.especial1}</p>}


                        <label className={style.label} htmlFor="heightMax">Height Max: </label>
                        <input onChange={handleChange} className={style.input1} type="text" name='heightMax' />
                        {errors.heightMax && <p>{errors.heightMax}</p>}
                        {errors.especial1 && <p>{errors.especial1}</p>}


                        <label className={style.label}  htmlFor="weightMin">Weight Min: </label>
                        <input onChange={handleChange} className={style.input1} type="text" name='weightMin' />
                        {errors.weightMin && <p>{errors.weightMin}</p>}
                        {errors.especial2 && <p>{errors.especial2}</p>}


                        <label className={style.label} htmlFor="weightMax">WeightMax: </label>
                        <input onChange={handleChange} className={style.input1} type="text" name='weightMax' />
                        {errors.weightMax && <p>{errors.weightMax}</p>}
                        {errors.especial2 && <p>{errors.especial2}</p>}

                        <label className={style.label} htmlFor="life_span">Life_Span: </label>
                        <input onChange={handleChange} className={style.input1} type="text" name='life_span' />
                        {errors.life_span && <p>{errors.life_span}</p>}
                    </div>

                    <div className={style.divTemps}>

                        <label className={style.label} htmlFor="temperament">Temperament: </label>
                        <select onChange={handleChange} name="temperament">
                            {
                                allTemperaments.map((temp) => (<option key={temp.id} value={temp.name}>
                                    {temp.name}
                                </option>
                                )
                                )}
                        </select>
                        <div className={style.options}>
                            {
                                state.temperament.map((temp) => <div key={temp}> <span className={style.spanForm}>{temp}</span> <button className={style.buttonOptions}type='button' id={temp} name='temperament' onClick={remove}>X</button></div>)
                            }
                        </div>
                        {errors.temperament && <p>{errors.temperament}</p>}
                    </div>

                    <input disabled={validateSubmit(errors, state)} type='submit' />
                </form>
            </div>
                 
               <Link to='/home'  className={style.linkRetForm}>HOME </Link>
              
            <div className={style.divPreVw}>
            <img src={state.image} alt={state.name}/>
                <h2>Name: {state?.name}</h2>
                <h3>Height Min: {state?.heightMin} cm</h3>
                <h3>Height Max: {state?.heightMax} cm</h3>
                <h3>Weight Min: {state?.weightMin} Kg</h3>
                <h3>Weight Max: {state?.weightMax} Kg</h3>
                <h3>Temperaments:  {state.temperament.map((temp)=> <span>{`${temp}, `}</span>)} </h3>
               
                <h3>Life_ Span: {state?.life_span} Years</h3>

       

            </div>
        </div>
            </>
            
    )
}

export default CreateDog;