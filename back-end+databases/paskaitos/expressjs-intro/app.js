const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose')
const dbURL = 'mongodb+srv://ikurkulis:monke@coding-school-cluster.csccnkn.mongodb.net/sample_mflix'

app.set('view engine', 'ejs');
app.set('views', './views');

mongoose.connect(dbURL)
    .then(res => {
        console.log('prisijungiau prie db')
        console.log(res)
    })
    .catch(error => console.log(error))

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String }
}, { timestamps: true })

// sample_mflix.users
const User = mongoose.model('Users', userSchema)

app.get('/', (req, res) => {
    const blogs = [
        { title: 'node.js pamoka', santrauka: 'lorem lorem' },
        { title: 'express.js pamoka', santrauka: 'lorem lorem' },
        { title: 'mongo db pamoka', santrauka: 'lorem lorem' }
    ];

    User.find().limit(10)
        .then(result => console.log(result))
        .catch(error => console.log(error));

    res.render('index', { blogs });
});

app.listen(port)
app.listen(port, () => {
    console.log('mano expressas veikia ant :' + port + ' porto');
});




app.get('/mano-pirmas', (req, res) => {
    res.send(
        '<h1>hello mano pirmoji express uzklausa</h1>'
    );
});



// app.get('/', (req, res) => {
//     res.sendFile('./views/index.html', { root: __dirname });
// });

app.get('/apie', (req, res) => {
    res.sendFile('./views/apie.html', { root: __dirname });
});

app.get('/blogs/create-blog', (req, res) => {
    res.sendFile('./views/blogs/create-blog.html', { root: __dirname });
});

app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});

// atlas manogdb
//user ikurkulis
//psw monke

// mongodb+srv://ikurkulis:<db_password>@coding-school-cluster.csccnkn.mongodb.net/