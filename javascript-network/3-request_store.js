#!/usr/bin/node

const request = require('request');
const fs = require('fs');
const { error } = require('console');

const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response, body) => {
    if (error) {
        console.error(error);
    }
    const data = body;

    fs.writeFile(filePath, data, 'utf-8', (err) => {
        if (err) {
            console.log(err);
        }
    });
});