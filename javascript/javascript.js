let movieData = {
    "The Darjeeling Limited": {
      plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
      cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
      runtime: 151,
      rating: 7.2,
      year: 2007,
    },
    "The Royal Tenenbaums": {
      plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
      rating: 7.6,
      year: 2001,
      cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
      runtime: 170,
    },
    "Fantastic Mr. Fox": {
      year: 2009,
      plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
      cast: [
        "George Clooney",
        "Meryl Streep",
        "Bill Murray",
        "Jason Schwartzman",
      ],
      runtime: 147,
      rating: 7.9,
    },
    "The Grand Budapest Hotel": {
      rating: 8.1,
      runtime: 159,
      year: 2014,
      plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    },
  };
//
const movie_container = document.querySelector("#movies-container");
const edit_movie_container = document.querySelector("#movies");

//Populate movie area with movies from the array
for (let i = 0; i < Object.keys(movieData).length; i++) {
  movie_container.insertAdjacentHTML('beforeend', '<div class="movie-card"><img src="images/movieimg.png"><a>Duration: ' + movieData[Object.getOwnPropertyNames(movieData)[i]].runtime + '</a><br><h3>' + Object.getOwnPropertyNames(movieData)[i] + '</h3><div class="movie-information"><h2>' + Object.getOwnPropertyNames(movieData)[i] + '</h2><a>Plot: ' + movieData[Object.getOwnPropertyNames(movieData)[i]].plot + '</a><a>Cast: ' + movieData[Object.getOwnPropertyNames(movieData)[i]].cast + '</a><a>Duration: ' + movieData[Object.getOwnPropertyNames(movieData)[i]].runtime + 'min.</a><a>Rating: ' + movieData[Object.getOwnPropertyNames(movieData)[i]].rating + '</a><a>Year: ' + movieData[Object.getOwnPropertyNames(movieData)[i]].year + '</a></div></div>');
};

//Sort by year
//store_ascending [Movie name, year, index]
var store_ascending = [];
function Sort_By_Year_Up(){
  //empty array
  store_ascending.splice(0, store_ascending.length);
  //Populate store_ascending array from movieData
  for (let i = 0; i < Object.keys(movieData).length; i++) {
    store_ascending.push([Object.getOwnPropertyNames(movieData)[i], movieData[Object.keys(movieData)[i]].year, Object.getOwnPropertyNames(movieData).indexOf(Object.keys(movieData)[i])]);
  }
  //Sort movie info in store_ascending array Ascending years
  for (let i = 0; i < store_ascending.length; i++) {
    if (i < store_ascending.length - 1 && store_ascending[i][1] < store_ascending[i + 1][1]) {
    }
    else if(i < store_ascending.length - 1 && store_ascending[i][1] > store_ascending[i + 1][1]) {
      var store_lower_year = store_ascending[i + 1];
      store_ascending.splice(i + 1, 1, store_ascending[i]);
      store_ascending.splice(i , 1, store_lower_year);
      i = -1;
    }
    else {
      //Catch everything eith class "movie-card"
      var removehtml = document.getElementsByClassName("movie-card");
      //Remove all previous Movie cards
      while(removehtml.length > 0){
        removehtml[0].remove();
      }
      //Display sorted movie cards by ascending years
      for (let i = 0; i < store_ascending.length; i++) {
        movie_container.insertAdjacentHTML('beforeend', '<div class="movie-card"><img src="images/movieimg.png"><a>Duration: ' + movieData[Object.getOwnPropertyNames(movieData)[store_ascending[i][2]]].runtime + '</a><br><h3>' + Object.getOwnPropertyNames(movieData)[store_ascending[i][2]] + '</h3><div class="movie-information"><h2>' + Object.getOwnPropertyNames(movieData)[store_ascending[i][2]] + '</h2><a>Plot: ' + movieData[Object.getOwnPropertyNames(movieData)[store_ascending[i][2]]].plot + '</a><a>Cast: ' + movieData[Object.getOwnPropertyNames(movieData)[store_ascending[i][2]]].cast + '</a><a>Duration: ' + movieData[Object.getOwnPropertyNames(movieData)[store_ascending[i][2]]].runtime + 'min.</a><a>Rating: ' + movieData[Object.getOwnPropertyNames(movieData)[store_ascending[i][2]]].rating + '</a><a>Year: ' + movieData[Object.getOwnPropertyNames(movieData)[store_ascending[i][2]]].year + '</a></div></div>');
      };
    }
  };
};

//store_descending [Movie name, year, index]
var store_descending = [];
function Sort_By_Year_Down(){
  //empty array
  store_descending.splice(0, store_descending.length);
  //Populate store_descending array from movieData
  for (let i = 0; i < Object.keys(movieData).length; i++) {
    store_descending.push([Object.getOwnPropertyNames(movieData)[i], movieData[Object.keys(movieData)[i]].year, Object.getOwnPropertyNames(movieData).indexOf(Object.keys(movieData)[i])]);
  }
  //Sort movie info in store_descending array Ascending years
  for (let i = 0; i < store_descending.length; i++) {
    if (i < store_descending.length - 1 && store_descending[i][1] > store_descending[i + 1][1]) {
    }
    else if(i < store_descending.length - 1 && store_descending[i][1] < store_descending[i + 1][1]) {
      var store_lower_year = store_descending[i];
      store_descending.splice(i, 1, store_descending[i + 1]);
      store_descending.splice(i + 1, 1, store_lower_year);
      i = -1;
    }
    else {
      //Catch everything eith class "movie-card"
      var removehtml = document.getElementsByClassName("movie-card");
      //Remove all previous Movie cards
      while(removehtml.length > 0){
        removehtml[0].remove();
      }
      //Display sorted movie cards by descending years
      for (let i = 0; i < store_descending.length; i++) {
        movie_container.insertAdjacentHTML('beforeend', '<div class="movie-card"><img src="images/movieimg.png"><a>Duration: ' + movieData[Object.getOwnPropertyNames(movieData)[store_descending[i][2]]].runtime + '</a><br><h3>' + Object.getOwnPropertyNames(movieData)[store_descending[i][2]] + '</h3><div class="movie-information"><h2>' + Object.getOwnPropertyNames(movieData)[store_descending[i][2]] + '</h2><a>Plot: ' + movieData[Object.getOwnPropertyNames(movieData)[store_descending[i][2]]].plot + '</a><a>Cast: ' + movieData[Object.getOwnPropertyNames(movieData)[store_descending[i][2]]].cast + '</a><a>Duration: ' + movieData[Object.getOwnPropertyNames(movieData)[store_descending[i][2]]].runtime + 'min.</a><a>Rating: ' + movieData[Object.getOwnPropertyNames(movieData)[store_descending[i][2]]].rating + '</a><a>Year: ' + movieData[Object.getOwnPropertyNames(movieData)[store_descending[i][2]]].year + '</a></div></div>');
      };
    }
  };
};
//Get all html elements with class "movie-card" and remove all of it
function Refresh(){
  var removehtml = document.getElementsByClassName("movie-card");
  while(removehtml.length > 0){
    removehtml[0].remove();
  }   
  for (let i = 0; i < Object.keys(movieData).length; i++) {
    movie_container.insertAdjacentHTML('beforeend', '<div class="movie-card"><img src="images/movieimg.png"><a>Duration: ' + movieData[Object.getOwnPropertyNames(movieData)[i]].runtime + '</a><br><h3>' + Object.getOwnPropertyNames(movieData)[i] + '</h3><div class="movie-information"><h2>' + Object.getOwnPropertyNames(movieData)[i] + '</h2><a>Plot: ' + movieData[Object.getOwnPropertyNames(movieData)[i]].plot + '</a><a>Cast: ' + movieData[Object.getOwnPropertyNames(movieData)[i]].cast + '</a><a>Duration: ' + movieData[Object.getOwnPropertyNames(movieData)[i]].runtime + 'min.</a><a>Rating: ' + movieData[Object.getOwnPropertyNames(movieData)[i]].rating + '</a><a>Year: ' + movieData[Object.getOwnPropertyNames(movieData)[i]].year + '</a></div></div>');
  };
};

//Store all given movie parameters like name plot etc into array.
//Check if movie with teh same already exist in the array if no display movie
//Add new movie to the array
var from_ids = ["movie-name", "plot", "cast", "runtime", "rating", "year"];
function Add_Movie(){
  var store_movie_info = [];
  //
  for (let i = 0; i < from_ids.length; i++){
    store_movie_info.push(document.getElementById(from_ids[i]).value);
  }
  //
  if(Object.getOwnPropertyNames(movieData).includes(store_movie_info[0]) == false){
    movie_container.insertAdjacentHTML('afterbegin', '<div class="movie-card"><img src="images/movieimg.png"><a>Duration: ' + store_movie_info[3] + '</a><br><h3>' + store_movie_info[0] + '</h3><div class="movie-information"><h2>' + store_movie_info[0] + '</h2><a>Plot: ' + store_movie_info[1] + '</a><a>Cast: ' + store_movie_info[2] + '</a><a>Duration: ' + store_movie_info[3] + 'min.</a><a>Rating: ' + store_movie_info[4] + '</a><a>Year: ' + store_movie_info[5] + '</a></div></div>');
  }
  //
  movieData[store_movie_info[0]] = {
    plot: store_movie_info[1],
    cast: store_movie_info[2],
    runtime: store_movie_info[3],
    rating: store_movie_info[4],
    year: store_movie_info[5],
  };
};

//
function Clear_Add_Movie_Fields(){
  for (let i = 0; i < from_ids.length; i++){
    document.getElementById(from_ids[i]).value = "";
  }
};

//
var store_open_forms = [];
function Toggle_form(formid) {
  if(store_open_forms.length != 0 && store_open_forms != formid){
    for (let i = 0; i < store_open_forms.length; i++) {
    document.getElementById(store_open_forms[i]).style.display = "none";
    store_open_forms.splice(i);
    }
  }
  var form = document.getElementById(formid);
  if(form.style.display == "grid"){
    form.style.display = "none";
    for (let i = 0; i < store_open_forms.length; i++) {
    store_open_forms.splice(i);
    }
  }
  else if(form.style.display == "none"){
    form.style.display = "grid";
    store_open_forms.push(formid);
  }
  else {
    form.style.display = "grid";
    store_open_forms.push(formid);
  }
};

//First clear the list so you dont add same movies in the list
//Input all the movies from the array as an option in the select list
function Input_Movies(){
  var removehtml = document.getElementsByClassName("movie-option");
  while(removehtml.length > 0){
    removehtml[0].remove();
  } 
  for (let i = 0; i < Object.keys(movieData).length; i++) {
    edit_movie_container.insertAdjacentHTML('beforeend', '<option class="movie-option">' + Object.getOwnPropertyNames(movieData)[i] + '</option>');
  }
  //clear fields
  document.getElementById("edit-movie-name").value = "";
  document.getElementById("edit-plot").value =  "";
  document.getElementById("edit-cast").value =  "";
  document.getElementById("edit-runtime").value =  "";
  document.getElementById("edit-rating").value =  "";
  document.getElementById("edit-year").value = "";
}

//Input selected movie information into the fields to edit
var store_original_object_name;
function Input_Movie_Info(movie){
  store_original_object_name = Object.getOwnPropertyNames(movieData)[Object.keys(movieData).indexOf(movie)];
  document.getElementById("edit-movie-name").value = Object.getOwnPropertyNames(movieData)[Object.keys(movieData).indexOf(movie)];
  document.getElementById("edit-plot").value = movieData[Object.getOwnPropertyNames(movieData)[Object.keys(movieData).indexOf(movie)]].plot;
  document.getElementById("edit-cast").value = movieData[Object.getOwnPropertyNames(movieData)[Object.keys(movieData).indexOf(movie)]].cast;
  document.getElementById("edit-runtime").value = movieData[Object.getOwnPropertyNames(movieData)[Object.keys(movieData).indexOf(movie)]].runtime;
  document.getElementById("edit-rating").value = movieData[Object.getOwnPropertyNames(movieData)[Object.keys(movieData).indexOf(movie)]].rating;
  document.getElementById("edit-year").value = movieData[Object.getOwnPropertyNames(movieData)[Object.keys(movieData).indexOf(movie)]].year;
};

//
function Edit_Movie(){
  movieData[store_original_object_name].plot = document.getElementById("edit-plot").value;
  movieData[store_original_object_name].cast = document.getElementById("edit-cast").value;
  movieData[store_original_object_name].runtime = document.getElementById("edit-runtime").value;
  movieData[store_original_object_name].rating = document.getElementById("edit-rating").value;
  movieData[store_original_object_name].year = document.getElementById("edit-year").value;
  if(document.getElementById("edit-movie-name").value != store_original_object_name){
    Object.defineProperty(movieData, document.getElementById("edit-movie-name").value,
    Object.getOwnPropertyDescriptor(movieData, store_original_object_name)
    );
    delete movieData[store_original_object_name];
  }
  Input_Movies();
  Refresh();
};