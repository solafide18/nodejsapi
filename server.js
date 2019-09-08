var routesapi = require('./routes/apiRoutes');
var routesweb = require('./routes/webRoutes');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var appapi = express.Router();
var port = process.env.PORT || 5001;

global.__basedir = __dirname;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api',appapi); //default route parent for api

routesapi(appapi);
routesweb(app);

app.use(function(req, res) {
    res.status(404).end('not found');
});

app.listen(port);
console.log('Learn Node JS With Kiddy, RESTful API server started on: ' + port);