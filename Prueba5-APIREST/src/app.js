const customerRoutes = require('./routes/customer');

const express = require('express');
const path = require('path')
const morgan  = require('morgan')
const myConnection = require('express-myconnection')
const mysql = require('mysql')

const app = express();

// settings
app.set('port', process.env.Port || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middleware
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: 3306,
    database: 'crudnode'
}, 'single'))

// rutas
app.use('/', customerRoutes);


app.listen(app.get('port'), ()=>{
    console.log("Server on port 3000");
})