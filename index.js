const express = require('express');
const app = express();


const path = require('path');
const public = path.join(_dirname,'public');
app.use(express.static(public));

app.use(express.urlencoded({extended: false}));

const router = require('./controllers/restaurant_menu');
app.use('/', router);

app.listen(3000, () => {
console.log('Server started on port 3000. Ctrl^c to quit');

})