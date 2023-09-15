const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Hello world msg");
})


app.listen(3200);