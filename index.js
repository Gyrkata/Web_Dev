const express = require('express');
const app = express();

const router = require('./controllers/restaurant_menu');
app.use('/', router);

app.listen(3000, () => {
console.log('Server started on port 3000. Ctrl^c to quit');

})