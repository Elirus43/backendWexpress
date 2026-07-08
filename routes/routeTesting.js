let express = require('express');
let router = express.Router();
let path = require('path');
// Specific Wildcard with Dynamic Route Params
/* router.get('/:username', (req, res) => {
    const user = req.params.username;
    res.send(`Hello ${user}!`);
}); */

// Dynamic API
router.get('/movies/:movieId', (req, res) => {
    res.send('movieId '+ req.params.movieId);
});

// Route Handler can be more than one
router.get('/handler', (req, res, next) => {
    console.log('First Handler');
    next();
});
router.get('/handler', (req, res) => {
    console.log('Second Handler');
    res.send('Second Handler');
})

// JSON return
router.get('/send', (req, res) => {
    res.send({name: 'Elirus', age: 23});
});

// Status code return
router.get('/notfound', (req, res) => {
    res.status(400).send('Not Found');
});

// Content-type change
router.get('/content', (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.send({name: 'Elirus'});
})

// Redirect Route
router.get('/admin', (req, res) => {
    console.log("Admin route");
    res.redirect('/test/login');
});

router.get('/login', (req, res) => {
    console.log("login route");
    res.status(201);
    res.send('Login route');
});

// Send File Route
router.get('/sendFile', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.pug'));
})
module.exports = router;