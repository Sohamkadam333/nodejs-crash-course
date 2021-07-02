console.log('hello nodejs');

const { registerUser, userLoggedIn } = require('./register-module');

registerUser('soham-kadam');
userLoggedIn('sk');