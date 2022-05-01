const express = require('express');
const mustache = require('mustache-express');
const app = express();

app.engine('mustache', mustache());
app.set('view engine', 'mustache');


const path = require('path');
const public = path.join(__dirname,'public');
app.use(express.static(public));


const router = require('./routes/restaurant_menu');
app.use('/', router);

app.listen(3000, () => {
console.log('Server started on port 3000. Ctrl^c to quit');





})