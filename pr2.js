var http = require('http'); 
var options = { 
    host: 'bing.com', 
    path: '/courses', 
    method: 'GET'
}; 
http.request(options, (response) => { 
    console.log(`STATUS: ${response.statusCode}`); 
}).end();
