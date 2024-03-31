/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict'

const numberOfFilms = +prompt('how many films do you watch?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {}, 
    actors: {},
    genres: [],
    privat: false
};

const oneOfTheLastFilms1 = prompt("one of the last watched films?"),
      rateOfFilm1 = prompt("how do you rate them?"),
      oneOfTheLastFilms2 = prompt("one of the last watched films?"),
      rateOfFilm2 = prompt("how do you rate them?");



personalMovieDB["movies"][oneOfTheLastFilms1] = rateOfFilm1;
personalMovieDB["movies"][oneOfTheLastFilms2] = rateOfFilm2;

console.log(personalMovieDB);