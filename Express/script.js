const express = require('express');

const app = express();

//This is middleware
app.use(function(req, res, next) {
    // console.log('Switching from the current route/page to next one...'+req.params.route);
    console.log(req) 
    next();
});

// This is server main page
app.get('/', (req, res) => {
    res.send('Welcome to my server! Sumedh here');
});
app.get('/me', (req, res) => {
    res.send('Welcome to My profile');
});
app.get('*', (req, res) =>{
   res.status(404).send('What !?');
});
app.listen(3000)

// note if u run this code using node then we will have to reload the server again and again for different responses
// To overcome this we need to use nodemon instead on node to run the server
// nodemon fileName
// if it throws an error then use "npx nodemon fileName" instead of "nodemon fileName"