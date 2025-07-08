//npm install express ejs mongoose validator bcrypt cookie-parser

const express = require('express')
const mongoose = require('mongoose')
const app = express()

const dbUrl = 'mongodb+srv://ikurkulis:monke@coding-school-cluster.csccnkn.mongodb.net/node-auth';

const authRoutes = require('./routes/authRoutes');
const {requireAuth, checkUser} = require('./middleware/authMiddleware');

mongoose.connect(dbUrl)
    .then(() => {
        app.listen(3000);
        console.log('app launched;database connected');
    })
    .catch(error => console.log(error));


app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get(/(.*)/, checkUser);
app.get('/', requireAuth, (req, res) => res.render('home'));
app.get('/randomListas', requireAuth, (req, res) => res.render('listas'));
app.use(authRoutes);