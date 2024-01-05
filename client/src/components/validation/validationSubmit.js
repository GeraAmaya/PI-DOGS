const validateSubmit = (errors, state) =>{
    let disableAux = true;

    // Recorrer el estado de errores
    for(let error in errors){
        if(errors[error] === "") disableAux =false;
        else{
            disableAux = true;
            break;
        }
    }

    // Recorrer el state de inputs
    for (let input in state) {
        if (input === "temperament" && state[input].length === 0) {
          disableAux = true;
          break;
        } else if (!state[input]) {
          disableAux = true;
          break;
        } else {
          disableAux = false;
        }
      }
      

    return disableAux;
}

export default validateSubmit;