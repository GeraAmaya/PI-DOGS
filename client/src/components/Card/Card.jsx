import {Link} from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const Card = (props) => {
    const { id, img, name, temperament, weight, onClose, addFav, removeFav, myFavorites, dataDogs } = props;
  
    // Verifica si weight es un objeto con la propiedad 'imperial'
    const weightText = weight && weight.imperial ? `Weight: ${weight.imperial}` : 'Weight: N/A';

    const [ isFav, setIsFav] = useState (false)

    const handleFavorite = () => {
      isFav ? removeFav(id) : addFav(props);
      setIsFav(!isFav);
    }

    useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
  
    return (
      <div>

{isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )}

        <button onClick={()=> onClose(id)}>X</button>
        <Link to={`/detail/${id}`}>  
        <img src={img} alt="" /> 
        <h2>Name: {name} </h2>
        <h4>Temperaments: {temperament} </h4>
        <h4>Weight:{weightText}</h4>
        </Link>
      </div>
    );
  };

  const mapDispatchToProps = (dispatch) => {
return{
  addFav:(dataDogs) => {
    dispatch(addFav(dataDogs));
  },
  removeFav: (id) => {
    dispatch(removeFav(id));
  }
}
  };


const mapStateToProps = (state) => {
      return {
        myFavorites: state.myFavorites,
      };
}




  
  export default connect(mapStateToProps, mapDispatchToProps)(Card);
  