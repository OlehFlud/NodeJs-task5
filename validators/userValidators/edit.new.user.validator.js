module.exports = userObject => {
    const {name,email,password} = userObject;

    if (!name || !email || !password){
        throw new Error('new user object is not valid')
    }

};