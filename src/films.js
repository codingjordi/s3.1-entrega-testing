// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map((movie) => {
    return movie.director
  })
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(movie => {
    return movie.director === director
  })
  console.log("EXERCICE 2 ->", result);
  return result;
}


// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let result = array.reduce((acc, movie) => {
    if (movie.director === director) {
      acc.totalScore += movie.score; 
      acc.count += 1;  
    }
    return acc;
  }, { totalScore: 0, count: 0 });

  let directorAverage = result.count > 0 ? parseFloat((result.totalScore / result.count).toFixed(2)) : 0;
  
  console.log("EXERCICE 2 -> ", directorAverage);

  return directorAverage;

}


  // Exercise 4:  Alphabetic order by title 
  function orderAlphabetically(array) {
    let result = [...array].sort((a,b) => a.title.localeCompare(b.title))

    let movieTitles = result.map((movie) => {
      return movie.title
    })

    let firstTwenty = movieTitles.slice(0, 20)

    console.log("EXERCICE 4 -> ", firstTwenty);

    return firstTwenty;
  
  }


// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let result = [...array].sort((a, b) => a.year === b.year ? a.title.localeCompare(b.title) : a.year - b.year)

  console.log("EXERCICE 5 -> ", result);

  return result;

}


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let result = array.reduce((acc, movie) => {
    if(movie.genre.includes(genre)) {
      acc.totalScore += movie.score; 
      acc.count += 1;  
    }
    return acc;
  }, { totalScore: 0, count: 0 });

  let categoryAverage = (result.count > 0) ? parseFloat((result.totalScore / result.count).toFixed(2)) : 0;

  console.log("EXERCICE 6 -> ", categoryAverage);

  return categoryAverage;
}



// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let result = array.map((movie) => {
    let movieCopy = { ...movie };
    let [hours, minutes] = movieCopy.duration.split(' ');

    if(!hours) {
      hours = '0h'
    }

    if (!minutes) {
      minutes = '0min'
    }


    hours = parseInt(hours.replace('h', ''));
    minutes = parseInt(minutes.replace('min', ''));

    let totalMinutes = (hours * 60) + minutes;
    movieCopy.duration = totalMinutes;
    return movieCopy;
  });

  return result;
}



// Exercise 8: Get the best film of a year
  function bestFilmOfYear(array, year) {
    let result = array.filter((movie) => {
      return movie.year === year
    })

    let allMoviesOfYear = result.sort((a, b) => b.score - a.score)
    
    const bestRatedByYear = allMoviesOfYear[0]
    
    return bestRatedByYear ? [bestRatedByYear] : [];
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
