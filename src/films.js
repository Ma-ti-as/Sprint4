
// Exercise 1: Get the array of all directors.

function getAllDirectors(array){
  let result= array.map(getAllDirectors=>getAllDirectors.director);
  console.log("EXERCICE 1 ->", result);
  return result;
  
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result=array.filter(x=>x.director==director)
  return result;
  //console.log(result);

}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let directors=getMoviesFromDirector(array, director)
  let score=directors.map(nota =>nota.score);
  var average =parseFloat(((score.reduce((a, b) => a + b))/score.length).toFixed(2));
  console.log(average);
  return average;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let result= array.map(filmTitle=>filmTitle.title);
  const alpha= result.sort((a,b) => a > b?1:-1);
  return alpha.slice(0,20);
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
 //const order= array.sort((a,b) => a.year - b.year?1:-1)
  const order= array.sort(function(a, b) {
    if (a.year !== b.year) {
        return a.year - b.year
    }
    if (a.title === b.title) {
      return 0;
    }
    return a.title > b.title ? 1 : -1;
  });
  return order;
  
}

// Exercise 6: Calculate the average of the movies in a category
//Hauràs de crear una funció que rebi una categoria de pel·lícula,  
//icalculi la mitjana de nota d'aquesta categoria (sobre el array de totes les pel·lícules).
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
//Has de crear una funció que rebent un array de pel·lícules, 
//retorna un array amb estàs pel·lícules però amb la durada en minuts!
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(year) {
  let result=movies.filter(x=>x.year==year)
  const order= result.sort((a,b) => a.score > b.score?-1:1);
  const bestScore=order[0].score;
  const bestFilm=order.filter(x=>x.score==bestScore);
  return bestFilm;
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
