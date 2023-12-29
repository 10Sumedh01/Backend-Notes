// Dynamic routing using express js

// Dynamic routes are the routes that are not always similar (e.g. /facebook/profile/sumedh) like in the example route the usename can be anything
// and for every username we dont  have to make route. Instead of making million of routes for specific user we can use dynamic routes.
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to my home page!');
});

// Dynamic route for users profile
// : means all the routes with all names will work
app.get('/profile/:username', (req, res) => {
    res.send(`Hello ${req.params.username}! `); // to acces the parameter from the url (that is username here)
});

app.listen(3000)