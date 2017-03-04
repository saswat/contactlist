const express = require('express');

const app = express();

// app.get('/', (request, response) => {
//   response.send('Hello World from server.js');
// });

app.use(express.static(`${__dirname}/public`));

app.listen(3000);
console.log('Server running on port 3000');
