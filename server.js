"use strict";

let express = require('express');
let app = express();
let path = require("path");
let port = 8000;

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/views/form.html'));
});

app.use('/static', express.static('assets'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
