const Emitter = require('events');

// const myEmitter = new Emitter;

// myEmitter.on('someEvent', (data) => {
//         console.log(data);
// })

// myEmitter.emit('someEvent', {
//         name: 'soham',
// })


class Auth extends Emitter {
        register(userName) {
                console.log(`Registered Successfully ${userName}`);
                this.emit('registered', userName)
        }
}

const auth = new Auth();

// listen event 
// can add multiple listener on event
//  for verify email
auth.on('registered', (user) => {
        console.log(`Sending Email to ${user}`);
})

// welcome email listn
auth.on('registered', (user) => {
        console.log(`Welcome ${user}`);
})

auth.register('soham-kadam');