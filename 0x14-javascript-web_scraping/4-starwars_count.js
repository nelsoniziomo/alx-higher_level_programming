#!/usr/bin/node

const request = require('request');
const apiUrl = process.argv[2];
const characterId = '18';

request(apiUrl, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    let count = 0;
    for (const movie of data.results) {
      for (const character of movie.characters) {
        if (character.includes(characterId)) {
          count++;
          break;
        }
      }
    }
    console.log(count);
  }
});
