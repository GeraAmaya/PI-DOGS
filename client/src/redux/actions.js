const ADD_FAV = 'ADD_FAV';
const REMOVE_FAV = 'REMOVE_FAV';

export const addFav = (dataDogs) => {
    return {
        type: 'ADD_FAV',
        payload: dataDogs,
    }
}


export const removeFav = (id) => {
    return{
        type: 'REMOVE_FAV',
        payload:id,
    
    }
}