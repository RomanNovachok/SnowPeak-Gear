'use strict';

let numberOfFilms;
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
    privat: false,
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i ++){
            const a = prompt(`${i+1} one of the last watched films?`, ''),
                  b = prompt(`${i+1} how do you rate them?`, '');
            if ( a != null && b != null && a != '' && b != '' && a.length < 50){
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (this.count < 10){
            alert("Просмотрено довольно мало фильмов");
        } else if (this.count < 30){
            alert("Вы классический зритель");
        } else if (this.count > 30 ){
            alert("Вы киноман");
        } else{
            alert("ERORRRRRRRRRR")
        }
    },
    writeYourGenres: function(){
        for (let i = 0; i < 3; i++){
            this.genres.push(prompt(`Your ${i+1} favourite genre`));
            while (this.genres[i] == '' || this.genres[i] == null){
                this.genres[i] = prompt(`Your ${i+1} favourite genre`);
            }
        }
        this.genres.forEach(element => console.log(`Любимый жанр ${this.genres.indexOf(element)+1} - это ${element}`)) 
    },    
    showMyDB: function() {
        if (this.privat == false){
            console.log(this)
        } 
    },
    toggleVisibleMyDB: function(){
        if (this.privat == false) {
            this.privat = true;
        } else{
            this.privat = false;
        }
    }
};

personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.detectPersonalLevel();
