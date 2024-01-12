// Sirve que se pase el nombre para que no salten todos los errores en las inputs a la vez si no solo del input que se esta modificando con ese name.
const validationInputs = (state, name, errors) => {


    // Validar la imagen
    if (name === 'image') {
        if (state.image === "") {
            errors.image = "The field is required"
        } else if (!/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(state.image)) {
            errors.image = "It must be a valid url"
        } else { errors.image = "" }
    }

    // Validar el name
    if (name === 'name') {
        if (state.name === "" || !/^(?!\s+$).+/.test(state.name)) {
            errors.name = "The field is required"
        } else if(!/^[A-Za-z\s]+$/.test(state.name)){
            errors.name = "The name can not contain numbers or special caracters"
        }else if (state.name.length > 25) {
            errors.name = "Name too long"
        } else { errors.name = "" }
    }

    // Validar heightMin  && heightMax
    if (name === 'heightMin' || name === 'heightMax') {
        const heightMin = parseInt(state.heightMin, 10); // Convertir a número entero
        const heightMax = parseInt(state.heightMax, 10); // Convertir a número entero
    
        if (isNaN(heightMin) || heightMin <= 0) {
            errors.heightMin = "The minimum height must be an integer greater than zero";
        }else if (!/^[0-9]+$/.test(state.heightMin)) {
            errors.heightMin = "The minimum height must be an integer";
        }else {
            errors.heightMin = "";
        }
    
        if (isNaN(heightMax) || heightMax > 90) {
            errors.heightMax = "The maximum height must be an integer and cannot be greater than 90";
        }else if (!/^[0-9]+$/.test(state.heightMax)) {
            errors.heightMax = "The maximum height must be an integer";
        }else {
            errors.heightMax = "";
        }
    
        if (heightMax <= heightMin) {
            errors.especial1 = "The maximum height cannot be less than or equal to the minimum height";
        } else {
            errors.especial1 = "";
        }
    }
    
    // Validar weightMin  && Validar weightMax

    if (name === 'weightMin' || name === 'weightMax') {
        const weightMin = parseInt(state.weightMin, 10); // Convertir a número entero
        const weightMax = parseInt(state.weightMax, 10); // Convertir a número entero
    
        if (isNaN(weightMin) || weightMin <= 0) {
            errors.weightMin = "The minimum weight must be an integer greater than zero";
        }else if (!/^[0-9]+$/.test(state.weightMin)) {
            errors.weightMin = "The minimum weight must be an integer.";
        }else {
            errors.weightMin = "";
        }
    
        if (isNaN(weightMax) || weightMax > 90) {
            errors.weightMax = "The maximum weight must be an integer and cannot be greater than 90";
        }else if (!/^[0-9]+$/.test(state.weightMax)) {
            errors.weightMax = "The maximum weight must be an integer";
        }else {
            errors.weightMax = "";
        }
    
        if (weightMax <= weightMin) {
            errors.especial2 = "The maximum weight cannot be less than or equal to the minimum weight";
        } else {
            errors.especial2 = "";
        }
    }

    // Validar life_span
    if (name === 'life_span') {
        if (state.life_span === "") {
            errors.life_span = "The field is required"
        } else if (state.life_span > 25) {
            errors.life_span = "Life span cannot be greater than 25"
        } else if (state.life_span <= 0) {
            errors.life_span = "Life span cannot be less than 0"
        }else if (!/^[0-9]+$/.test(state.life_span)) {
            errors.life_span = "Life span must be an integer";
        } else { errors.life_span = "" }
    }

    if (name === 'temperament') {
        if (state.temperament.length === 0) {
            errors.temperament = "You must select at least one temperament"
        } else {
            errors.temperament = ""
        }
    }

    return errors;
}

export default validationInputs;