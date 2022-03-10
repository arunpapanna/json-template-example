const express = require('express')
const object = require('json-templater/object');

const app = express()

const port = 3000

app.get('/', (req, res) => {
   // res.send("Hello World")
    var response;
    if(false) {
         response = object(
            require('./template/template.json'),
            {magic: 'a', value: 'b'}
        );
    }
    else {
        response = object(
            require('./template/template2.json'),
            {magic: 'x', value: 'y'}
        );
    }

    res.send(response);
})

app.listen(port, () => {
    console.log(`App listening on port : ${port}`)
})