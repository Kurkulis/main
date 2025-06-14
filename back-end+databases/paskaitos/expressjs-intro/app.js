const express = require('express');
const app = express();
const port = 3000;

// app.get('/mano-pirmas', (req, res) => {
//     res.send(
//         '<h1>hello mano pirmoji express uzklausa</h1>'
//     );
// });

// app.listen(port)
app.listen(port, () => {
    console.log('mano expressas veikia ant :' + port + ' porto');
});

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/apie', (req, res) => {
    res.sendFile('./views/apie.html', { root: __dirname });
});

app.get('/blogs/create-blog', (req, res) => {
    res.sendFile('./views/blogs/create-blog.html', { root: __dirname });
});

app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});
