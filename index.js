const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const data = require('./home.json');
    res.json(data);
});

app.get('/watchlist/manga/animixplay', (req, res) => {
    const data = require('./data.json');
    res.json(data);
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
