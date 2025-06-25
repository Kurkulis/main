console.log("🚧 Programa startuoja...");

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
const dbUrl = 'mongodb+srv://ikurkulis:monke@coding-school-cluster.csccnkn.mongodb.net/crud-example';
const receptasRoutes = require('./routes/receptasRoutes');
const methodOverride = require('method-override');
mongoose.connect(dbUrl)
    .then(() => {
        console.log('✅ Prisijungta prie MongoDB');
        app.listen(PORT, () => {
            console.log(`🚀 Serveris paleistas: http://localhost:${PORT}`);
        });
    })
    .catch((error) => console.error('❌ Mongo prisijungimo klaida:', error));


app.set('view engine', 'ejs');
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.redirect('receptai/list')
});

app.use(receptasRoutes);