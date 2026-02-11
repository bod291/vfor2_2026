const fs = require('fs')
const path = require('path')

const loadData = () => {
    const filePath = path.join(__dirname, '../data/movies.json');
    const fileData = fs.readFileSync(filePath);
    return JSON.parse(fileData);
};

const getMovies = () => {
    const movies =  loadData();
    return movies;
};

const getMoviesById = (id) => {
    const movies = loadData();
    return movies.find ((m) => m.id === id); 
};

module.exports = {
    getMovies,
    getMoviesById
};