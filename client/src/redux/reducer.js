import {  GET_DOG_TEMPS,POST_DOG, GET_ALL, GET_BY_NAME, GET_DETAIL, GET_TEMPERAMENTS, GET_CLEAN, FILTER_ORIGIN, FILTER_TEMPERAMENTS, ORDER_BY_NAME, ORDER_BY_WEIGHT, DELETE_DOG_SUCCESS, DELETE_DOG_FAILURE, SET_NAME } from '../Redux/actionTypes';



const initialState = {
    allDogs: [],
    dogFilter: [],
    dogDetail: [],
    temperaments: [],
    userName: [],
}

function reducer(state = initialState, action) {
    let aux; 


    switch (action.type) {
        case GET_ALL:
            return {
                ...state,
                allDogs: action.payload,
                dogFilter: action.payload
            };
        case GET_BY_NAME:
            return {
                ...state,
                dogFilter: action.payload
            };
        case GET_DETAIL:
            return {
                ...state,
                dogDetail: action.payload,
            };
        case GET_TEMPERAMENTS:
            return {
                ...state,
                temperaments: action.payload,
            };

        case ORDER_BY_NAME:

              const sortedDogFilter1 = [...state.dogFilter].sort((a, b) => {
                const nameA = a.name?.toLowerCase() || ""; 
                const nameB = b.name?.toLowerCase() || "";
            
                // si devuelve 1 el primer elemento (a) debería ir después del segundo elemento (b) en el ordenamiento.
                if (nameA > nameB) return action.payload === "asc" ? 1 : -1;

                // si devuelve -1, significa que el primer elemento (a) debería ir antes del segundo elemento (b) en el ordenamiento.
                if (nameA < nameB) return action.payload === "asc" ? -1 : 1;
                return 0;
              });
            
              return {
                ...state,
                dogFilter: sortedDogFilter1,
              };

        case ORDER_BY_WEIGHT:
            const { payload } = action;

            const compareFunctionMin = (a, b) => {
                if (a.weightMin < b.weightMin) return -1;
                if (a.weightMin > b.weightMin) return 1;
                return 0;
            };

            const compareFunctionMax = (a, b) => { 
                if (a.weightMax > b.weightMax) return -1;
                if (a.weightMax < b.weightMax) return 1;
                return 0;
            };

            
            let sortedMin = [...state.dogFilter.filter(item => payload === "min")].sort(compareFunctionMin);
            let sortedMax = [...state.dogFilter.filter(item => payload === "max")].sort(compareFunctionMax);

           
            const sortedDogFilter = sortedMin.concat(sortedMax);

            return {
                ...state,
                dogFilter: sortedDogFilter,
            };

        case FILTER_TEMPERAMENTS:
            const allDogsCopyTemp = [...state.allDogs]
            if (action.payload === 'all') {
                aux = allDogsCopyTemp;
            } else {
                aux = allDogsCopyTemp.filter((dog) => {
                    if (!dog.temperament) return undefined;
                    return dog.temperament.includes(action.payload);
                })
            }
            return {
                ...state,
                dogFilter: aux,
            };

        case FILTER_ORIGIN:
            const allDogsCopy = [...state.allDogs];
            let createdFiltered;
            if (action.payload === 'db') {
                createdFiltered = allDogsCopy.filter((dog) => dog.createInDb);
            } else if (action.payload === 'api') {
                createdFiltered = allDogsCopy.filter((dog) => !dog.createInDb);
            } else {
                createdFiltered = allDogsCopy;
            }

            return {
                ...state,
                dogFilter: createdFiltered,
            };

        case POST_DOG:
            return {
                ...state
            };


        case GET_CLEAN:
            return {
                ...state,
                dogDetail: action.payload,
            };

    

        case SET_NAME:
                    return {
                      ...state,
                      userName: action.payload,
                    };

                default:
            return { ...state };
          };   
        }

       
    

export default reducer;