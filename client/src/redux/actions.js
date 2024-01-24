import {GET_DOG_TEMPS, GET_ALL, GET_BY_NAME,GET_DETAIL,GET_CLEAN,GET_TEMPERAMENTS,FILTER_ORIGIN,FILTER_TEMPERAMENTS,ORDER_BY_NAME, ORDER_BY_WEIGHT, POST_DOG,DELETE_DOG_FAILURE,DELETE_DOG_SUCCESS, SET_NAME} from './actionTypes';
import axios from 'axios';



export const setUserName = (name) => {
    return {
      type: SET_NAME,
      payload: name,
    };
  };
  


export const getDogs = () => {

    const endpoint ='http://localhost:3001/dogs';
    return async (dispatch) => {
        try {
            const {data} = await axios.get(endpoint);
            return dispatch({
                type: GET_ALL,
                payload: data,
            });
            
        } catch (error) {
            alert(error.response.data)
        }
        
    };
}

export const getByName =(name) =>{
    const endpoint =`http://localhost:3001/dogs/?name=${name}`;
    return async (dispatch) => {
        try {
            const {data} = await axios.get(endpoint);
            return dispatch({
                type: GET_BY_NAME,
                payload: data,
            });
            
        } catch (error) {
            alert(error.response.data)
        }
        
    };
}

export const getDetail =(id) =>{
    const endpoint= `http://localhost:3001/dogs/${id}`;

    return async (dispatch) =>{
        try {
            const {data} = await axios.get(endpoint);
            return dispatch({
                type:GET_DETAIL,
                payload:data,
            })
        } catch (error) {
            alert(error.response.data)
        }
    }
}

export const getTemperaments =() =>{
    const endpoint= 'http://localhost:3001/temperaments';

    return async (dispatch) =>{
        try {
            const {data} = await axios.get(endpoint);
            return dispatch({
                type:GET_TEMPERAMENTS,
                payload:data,
            })
        } catch (error) {
            alert(error.message);
        }
    }
}

export const getClean =() =>{
    return{
        type: GET_CLEAN,
        payload:[]
    }
}

export const postDog =(createDog) =>{
    const endpoint= 'http://localhost:3001/dogs';

    return async (dispatch) =>{
        try {
            const posted = await axios.post(endpoint,createDog);
            console.log(posted);
            alert(posted.data.message);
            return  dispatch ({ type:POST_DOG, payload: posted.data})
        } catch (error) {
            console.log(error);
            alert(error.response.data)
        }
    }
}






/// CON ESTA ACCION MANEJO LA ELIMINACION DE LA CARD CREADA Y LOS ERRORES, TANTO SI SALE BIEN
/// COMO SI SALE MAL

export const deleteDog = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/dogs/${id}`);
    dispatch({
      type: DELETE_DOG_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: DELETE_DOG_FAILURE,
      payload: error.message,
      
    });
    alert("Error al eliminar perro");
  }
};






// FILTERS && ORDERS

export const filterTemperament =(temperament) =>{
    return { type: FILTER_TEMPERAMENTS, payload: temperament }
}

export const orderByName =(orden) =>{
    return { type: ORDER_BY_NAME, payload: orden }
}

export const orderByWeight =(payload) =>{
    return { type: ORDER_BY_WEIGHT, payload}
}

export const filterOrigin =(payload) =>{
    return { type: FILTER_ORIGIN, payload}
}

