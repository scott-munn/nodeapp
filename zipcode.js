var zipcode = require('zipcode');

// returns data in [city, state] format

var code = zipcode.lookup('GU273HQ'); // ['SAN FRANCISCO','CA']

console.log(code);
