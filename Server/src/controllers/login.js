const users = require("../utils/users")

const login = (request, response) => {
    const email = request.query.email
    const pass = request.query.password
    const userExists = users.some(
    (user) => user.email === email && user.password === pass
    );
    
    if (userExists){
        response.status(200).json({access: true})
    } else {
        response.status(200).json({access: false})
    }
}

module.exports = login;