const express = require('express');
const app = express();

app.get('/', function(req, res){
res.send('Welcome! Have a look at our menu!');
})

app.listen(3000, () => {
console.log('Server started on port 3000. Ctrl^c to quit');

})