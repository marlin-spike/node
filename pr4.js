var fs = require('fs')
fs.open('test.txt', 'w', function(err) {
if (err) throw err;
console.log('File is saved successfully');
});

var fs = require('fs')
fs.writeFile('test.txt', 'Content of test file', function(err) {
   if (err) throw err;
   console.log('File is saved successfully');
});


var fs = require('fs')
fs.rename('text.txt', 'text2.txt', function(err) {
   if (err) throw err;
   console.log('File is renamed  successfully');
});


var fs = require('fs')
fs.unlink('text.txt', function(err) {
   if (err) throw err;
   console.log('File is deleted successfully');
});

