//=======[ Settings, Imports & Data ]==========================================
require("./config");

var PORT    = 3000;

const jwt = require('jsonwebtoken');

/* ====== Express ============= */
const express = require('express');
const app = express();


/* ====== CORS ============ */
const cors = require('cors');
// to enable cors
app.use(cors());
app.options('*', cors());


/* ======= Rutas ============== */

const routerDispositivos = require('./routes/dispositivos');
const routerMediciones = require('./routes/mediciones');


app.use('/devices', routerDispositivos);
app.use('/measurements', routerMediciones);

/* ======= Variables ========== */





// revisar uso
// DECLARE JWT-secret
const JWT_Secret = 'your_secret_key';

var testUser = { username: 'daiot', password: 'daiot' };

const auth = function (req, res, next) {
    let autHeader = (req.headers.authorization || '')
    if (autHeader.startsWith('Bearer ')) {
        token = autHeader.split(' ')[1]
    } else {
        res.status(401).send({ message: "No hay token en la cabecera" })
    }
    jwt.verify(token, JWT_Secret, function(err) {
        if (err) {
            console.log('error en el token')
            res.status(403).send({ meesage: "Token inválido" })
        }
    })
    next()
}

// to parse application/json
app.use(express.json()); 
// to serve static files
app.use(express.static('/home/node/app/static/'));

//=======[ Main module code ]==================================================

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.get('/', function(req, res, next) {
    res.send({'mensaje': 'Bienvenidos a DAM'}).status(200);
});


// --------- OTROS --------------------->

app.post('/authenticate', (req, res) => {

    if (req.body) {
        var user = req.body;
        console.log(user);

        if (testUser.username === req.body.username && testUser.password === req.body.password) {
            var token = jwt.sign(user, JWT_Secret);
            res.status(200).send({
                signed_user: user,
                token: token
            });
        } else {
            res.status(403).send({
                errorMessage: 'Auth required!'
            });
        }
    } else {
        res.status(403).send({
            errorMessage: 'Please provide username and password'
        });
    }

});

app.listen(PORT, function(req, res) {
    console.log(`NodeJS API running correctly in port: ${PORT}`);
});

//=======[ End of file ]=======================================================
