const registerUser = (userName) => {
        console.log(`${userName} has been registered`);
}

const userLoggedIn = (userName) => {
        console.log(`${userName} has been LoggedIn`);

}

// module.exports = registerUser;

module.exports = {
        registerUser,
        userLoggedIn
}