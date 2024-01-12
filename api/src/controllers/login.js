const users = require ('../utils/Users')


const login =(req,res) =>{
    const { email, password} = req.query;

    users.forEach((user)=>{
        if (user.email === email && user.password === password){
            access = true;
        }
    }) 
}

module.exports = login;