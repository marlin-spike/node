
const {EventEmitter} = require('events');

const Emitter = new EventEmitter();

Emitter.on('Message logged', function() {
console.log("Listner called");
});

Emitter.emit('Message logged'); // change 'myEvent' to 'Message logged'

// This will now print "Listner called" on the console.
