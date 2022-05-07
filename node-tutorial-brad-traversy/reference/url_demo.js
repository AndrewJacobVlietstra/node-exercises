const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);

// Host (root domain)
console.log(myUrl.host);

// Hostname (doesn't show port number if its part of the url)
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);

// Add parameter to object
myUrl.searchParams.append('time', '52s');
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, key) => console.log(`${key}: ${value}`));