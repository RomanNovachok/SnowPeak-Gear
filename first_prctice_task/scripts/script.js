
'use strict';

let numberOfFilms

function start() {
    numberOfFilms = +prompt('how many films do you watch?', ''); 
    while (numberOfFilms =="" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('how many films do you watch?', ''); 
    }
}

start()

const personalMovieDB = {
    count: numberOfFilms,
    movies: {}, 
    actors: {},
    genres: [],
    privat: false
};

function  rememberMyFilms() {
    for (let i = 0; i < 2; i ++){
        const a = prompt(`${i+1} one of the last watched films?`, ''),
              b = prompt(`${i+1} how do you rate them?`, '');
        if ( a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    };
}

rememberMyFilms()

function detectPersonalLevel() {

    if (personalMovieDB.count < 10){
        alert("Просмотрено довольно мало фильмов");
    } else if ( personalMovieDB.count < 30){
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30 ){
        alert("Вы киноман");
    } else{
        alert("ERORRRRRRRRRR")
    }
}

function writeYourGenres(obj){
    for (let i = 0; i < 3; i++){
        obj.genres.push(prompt(`Your ${i+1} favourite genre`));
    };
}

writeYourGenres(personalMovieDB)

function showMyDB(obj) {
    if (obj.privat == false){
        console.log(personalMovieDB)
    } 
}

// personalMovieDB.privat = true

showMyDB(personalMovieDB)
detectPersonalLevel()
