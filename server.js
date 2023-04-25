var http = require('http');
var express = require('express');
var app = express();
var cors = require('cors');
const user = require('./models/users');
const port = process.env.PORT || 8000;
var corsOptions = {
    origin: "http://localhost:4000"
};
const apiRoot = '/api';
const router = express.Router();
const crud = require('./controllers/users.crud');

app.use(express.static(__dirname + '/dist/primeng'));
app.use(cors(corsOptions));
app.use(express.json());
app.get('/', ( req, res ) => res.sendFile( path.join(__dirname)) );


router.post('/', crud.createUser);
router.get('/', crud.getAllUsers);
router.delete('/:id', crud.deleteUser);
router.delete('/', crud.deleteAllUsers);


user.sequelize.sync();
app.use(apiRoot, router);

app.listen(port);
console.log("Server running on localhost:" + port);