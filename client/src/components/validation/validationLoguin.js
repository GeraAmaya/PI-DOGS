const validationLoguin = (data) => {
    let errors ={}

    if(!data.email.includes('@')){
        errors.e1 = 'The email is not valid'
    }
    if (!data.email){
        errors.e2 = 'Enter an email'
    }
    if (data.email.length > 35){
        errors.e3 = 'Exceeds 35 characters'
    }
     if(!/\d/.test(data.password)){
        errors.p1 = 'Enter at least one number'
    }
    if(data.password.length < 6 || data.password.length > 10){
        errors.p2 = 'Must be between 6 and 10 characters'
    }




    return errors;
}

export default validationLoguin