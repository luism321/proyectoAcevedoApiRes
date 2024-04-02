const express = require('express')
import pkg from '../package.json';
const app1 = express();
const morgan = require('morgan');
const cors = require('cors');
const config = require('./confi')
const bodyParser = require('body-parser')


import "regenerator-runtime";
import clientes from './routes/clientes.routes';
import coordenadas from './routes/coordenadas.routes';
import dotaciones from './routes/dotaciones.routes';
import edificios from './routes/edficios.routes';
import users from './routes/user1x10';
import secretaria from './routes/secretaria'

app1.set('port', process.env.PORT || 3006)
app1.set('llave', config.llave);
// 2
app1.use(bodyParser.urlencoded({ extended: true }));
// 3
app1.use(bodyParser.json());

app1.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app1.use(cors({
    origin: ["http://localhost:19006/", "http://localhost:3000/", "http://localhost:21503/"],
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE']
}));


app1.use(morgan('dev'));
app1.use(express.json());
app1.use(express.urlencoded({ extended: false }));

app1.set('pkg', pkg)

app1.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})

app1.use('/api/', require('./services/Login/login'))


// rutas clientes
app1.use('/api/clientes', clientes)
app1.use('/api/coordenadas', coordenadas)
app1.use('/api/dotaciones', dotaciones)
app1.use('/api/usuarios', users)
app1.use('/api/secretaria', secretaria)

// rutas edificios
app1.use('/api/edificios', edificios)



app1.listen(app1.get('port'), () => {
    console.log(`Server on port ${app1.get('port')}`)
});