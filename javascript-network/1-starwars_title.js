#!/usr/bin/node

const request = require('request');
const movie_ID = process.argv[2];
const url = 'https://swapi-api.alx-tools.com/api/films/:id';
const mainUrl = url.concat(movie_ID);

request(mainUrl, (error, response, body) => {
    if (error) {
        console.error(error);
    }
    const movieData = JSON.parse(body);
    console.log(movieData.title);
});