type values = {
    firstname: String,
    lastname: String,
    username: String,
    email: String
}

interface User {
    
        values: values,
        isLoggedIn: Boolean
    
}

export {
    User
}