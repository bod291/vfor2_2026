const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));
app.use(express.static(path.join(__dirname, 'public')));

const getMovies = () => {
    const data = fs.readFileSync(path.join(__dirname, 'src/data/movies.json'));
    return JSON.parse(data);
};

app.get('/', (req, res) => {
    const movies = getMovies();
    res.render('index', { title: 'Bíóvefurinn', movies });
});

app.get('/movie/:id', (req, res) => {
    const movies = getMovies();
    res.render('about', {title: 'um okkur'});

    if (!movie) {
        return res.status(404).render('404', {title: 'Síða fannst ekki'});
    }

    res.render('movie-details',
     { title: movie.title, movie });
});

app.listen(PORT, () => {
    console.log(`server keyrir á http://localhost:${PORT}`);
});