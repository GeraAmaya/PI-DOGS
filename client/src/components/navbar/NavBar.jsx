import SearchBar from '../Search/SearchBar';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { orderByName, orderByWeight, filterOrigin, filterTemperament } from '../../Redux/actions';



const Nav = ({ handleChange, handleSubmit, handleClick }) => {  



  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments)


  function handleFiltTemp(event) {
    event.preventDefault();
    dispatch(filterTemperament(event.target.value));
  }

  function handleOrderName(event) {
    event.preventDefault();
    dispatch(orderByName(event.target.value));
  }

  function handleOrderWeight(event) {
    event.preventDefault();
    dispatch(orderByWeight(event.target.value));
  }

  function handleFiltOrigin(event) {
    event.preventDefault();
    dispatch(filterOrigin(event.target.value));
  }


  return (
    <div className={style.container}>


<div className={style.containerSearch} >
      <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} handleClick={handleClick} />
      </div>

  <div className={style.containerSelect} >

      <select className={style.selectFilters} defaultValue="CREATED" onChange={(event) => handleFiltOrigin(event)}>
        <option value="CREATED" disabled>Filter Origin </option>
        <option value="all">All</option>
        <option value="api">Api</option>
        <option value="db">DB</option>
      </select>

      <select className={style.selectFilters} defaultValue="TEMP" onChange={(event) => handleFiltTemp(event)}>
        <option value="TEMP" disabled>Filter Temperaments </option>
        <option value="all">All</option>
        {temperaments.map((temp) => (
          <option key={temp.id} value={temp.name}>
            {""}
            {temp.name}
          </option>
        )
        )}
      </select>

      <select className={style.selectFilters} defaultValue="ALP" onChange={(event) => handleOrderName(event)}>
        <option value="ALP" disabled>Order by Name</option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>

      <select className={style.selectFilters} defaultValue="WEIGHT" onChange={(event) => handleOrderWeight(event)}>
        <option value="WEIGHT" disabled>Order by Weight</option>
        <option value="min">Weight Min</option>
        <option value="max">Weight Max</option>
      </select>

      </div>


      

      <div className={style.containerItems}>
 <button className={style.beautifulButton} > <Link to='/home' className={style.link}>HOME</Link></button>
 <button className={style.beautifulButton} > <Link to='/create' className={style.link}>CREATE</Link></button>
 <button className={style.beautifulButton} ><Link to='/' className={style.link}> LOGOUT </Link></button>



  </div>


    </div>
  )
}

export default Nav;