// Refer - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
// Refer - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
// Refer - https://stackoverflow.com/questions/35549547/what-is-the-difference-between-the-fetch-api-and-xmlhttprequest
// Fetch is a new native JavaScript API, supported by most browsers today. Fetch allows you to make network requests similar to XMLHttpRequest . According to Google Developers Documentation Fetch makes it easier to make asynchronous requests and handle responses better than with the older XMLHttpRequest.
// Fetch vs Ajax. Fetch is a browser API for loading texts, images, structured data, asynchronously to update an HTML page. It's a bit like the definition of Ajax! But fetch is built on the Promise object which greatly simplifies the code, especially if used in conjunction with async/await.
// XMLHttpRequest (XHR) is an API in the form of an object whose methods transfer data between a web browser and a web server. The object is provided by the browser's JavaScript environment.
// Notmally in javascript web dev we can use axios.get istead of fetch?

// Fake Online REST API for Testing and Prototyping - https://jsonplaceholder.typicode.com/

// We need an environment that supports the [Fetch API](https://fetch.spec.whatwg.org/), such as a a web browser. Node does not currently support Fetch in itself. If you want to load this library in an environment that does not natively support Fetch you will need to load your own polyfill/depedency such as [node-fetch](https://www.npmjs.com/package/node-fetch). Polyfill - In web development, a polyfill is code that implements a feature on web browsers that do not support the feature. 
const fetch = require('node-fetch');

// function newfetchVal()
// {
// return fetch('https://jsonplaceholder.typicode.com/users');
// }
// console.log(newfetchVal());  
//
// The above code prints "Promise { <pending> }"

// Books api - www.googleapis.com/books/ - ISBN 0747532699 - Harry Potter and the Philosopher's Stone 
function book() {
    // return fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699') // then() keyword returns the promise reponse. If then is not used the promise remains pending.
    return fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699')
    .then(reponse => reponse.json()) // 
    .then(jsonResponse => console.log(jsonResponse.items[0].volumeInfo.title));
}

book();


