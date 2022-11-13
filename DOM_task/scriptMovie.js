const MOVIE_LIST = "list";
const Movie_list = document.getElementById(MOVIE_LIST);

const FULL_LIST = "full";
const Full_list = document.getElementById(FULL_LIST);

const DURATION_LIST = "show_list_movie";
const Duration_list = document.getElementById(DURATION_LIST);

const GENRE_LIST = "genre";
const Genre_list = document.getElementById(GENRE_LIST);

// конструктор для фільму
function Movie(name, genre, year, duration, isAvailable) {
    this.name = name;
    this.genre = genre;
    this.year = year;
    this.duration = duration;
    this.isAvailable = isAvailable;

    //для того, щоб взнати повну інформацію про фільм (topGun.getInfo();)
    this.getInfo = function getInfo() {
        return this.name + " Duration(m): " + this.duration +
            " Is available now? " + this.isAvailable;
    }
    //зміна доступності перегляду (topGun.changeAvailability("Yes" OR "No";))
    this.changeAvailability = function changeAvailability(availability) {
        this.isAvailable = availability;
    }
    this.checkAvailability = function checkAvailability() {
        return this.isAvailable === "Yes";
    }
}

const backEndList = [
    {
        name: "Kill Bill",
        genre: "Crime",
        year: "2003",
        duration: 111,
        isAvailable: "No",
    },
    {
        name: "Dune: Part One",
        genre: "Action",
        year: "1021",
        duration: 132,
        isAvailable: "Yes",
    },
    {
        name: "El laberinto del fauno",
        genre: "Fantasy",
        year: "2006",
        duration: 118,
        isAvailable: "No",
    },
    {
        name: "Terminator 2: Judgment Day",
        genre: "Action",
        year: "1991",
        duration: 137,
        isAvailable: "No",
    },
    {
        name: "Goodfellas",
        genre: "Crime",
        year: "1990",
        duration: 145,
        isAvailable: "No",
    },
    {
        name: "Hachi: A Dog's Tale",
        genre: "Drama",
        year: "2009",
        duration: 103,
        isAvailable: "No",
    },
    {
        name: "The Northman",
        genre: "Action",
        year: "2022",
        duration: 137,
        isAvailable: "Yes",
    },
    {
        name: "The Black Phone",
        genre: "Crime",
        year: "2022",
        duration: 103,
        isAvailable: "Yes",
    },
    {
        name: "Uncharted",
        genre: "Action",
        year: "2022",
        duration: 116,
        isAvailable: "Yes",
    },
    {
        name: "Top Gun: Maverick",
        genre: "Action",
        year: "2022",
        duration: 130,
        isAvailable: "Yes",
    },
    {
        name: "Thor: Love and Thunder",
        genre: "Action",
        year: "2022",
        duration: 118,
        isAvailable: "Yes",
    },
    {
        name: "Black Panther: Wakanda Forever",
        genre: "Action",
        year: "2022",
        duration: 161,
        isAvailable: "Yes",
    },
    {
        name: "The King's Speech",
        genre: "Drama",
        year: "2010",
        duration: 118,
        isAvailable: "No",
    },
    {
        name: "Die Hard",
        genre: "Action",
        year: "1988",
        duration: 132,
        isAvailable: "No",
    },
    {
        name: "Gladiator",
        genre: "Action",
        year: "2000",
        duration: 155,
        isAvailable: "No",
    },
    {
        name: "The Green Mile",
        genre: "Drama",
        year: "1999",
        duration: 189,
        isAvailable: "No",
    },
    {
        name: "Requiem for a Dream",
        genre: "Drama",
        year: "2000",
        duration: 102,
        isAvailable: "No",
    },
    {
        name: "Se7en",
        genre: "Crime",
        year: "1995",
        duration: 127,
        isAvailable: "No",
    },
    {
        name: "The Silence of the Lambs",
        genre: "Crime",
        year: "1991",
        duration: 168,
        isAvailable: "No",
    },
    {
        name: "The Matrix",
        genre: "Action",
        year: "1999",
        duration: 136,
        isAvailable: "No",
    },
    {
        name: " The Lord of the Rings: The Fellowship of the Ring",
        genre: "Fantasy",
        year: "2001",
        duration: 178,
        isAvailable: "No",
    },
    {
        name: "Star Wars:The Empire Strikes Back",
        genre: "Fantasy",
        year: "1980",
        duration: 124,
        isAvailable: "No",
    },
    {
        name: "The Lion King",
        genre: "Animated movie",
        year: "2019",
        duration: 118,
        isAvailable: "Yes",
    },
    {
        name: "Mowgli: Legend of the Jungle",
        genre: "Animated movie",
        year: "2018",
        duration: 104,
        isAvailable: "No",
    },
    {
        name: "Doctor Strange",
        genre: "Action",
        year: "2016",
        duration: 115,
        isAvailable: "Yes",
    },
    {
        name: "John Wick",
        genre: "Action",
        year: "2014",
        duration: 101,
        isAvailable: "Yes",
    },
    {
        name: "The Notebook",
        genre: "Drama",
        year: "2004",
        duration: 123,
        isAvailable: "No",
    },
    {
        name: "The Godfather",
        genre: "Crime",
        year: "1972",
        duration: 175,
        isAvailable: "No",
    },
    {
        name: "Pulp Fiction",
        genre: "Crime",
        year: "1994",
        duration: 155,
        isAvailable: "No",
    }
];

//метод що "дістає" фільми з бекендліста
function getMovies() {
    const data = backEndList;
    prepareMoviesList(data);
};

function prepareMoviesList(data) {
    const newList = [];
    for (let movie of data) {
        newList.push(new Movie(movie.name, movie.genre, movie.year, movie.duration, movie.isAvailable));
    }
    // renderMovies(newList);
    return newList;
};
getMovies();

// метод що показує всі фільми
let movieList = [];
movieList = prepareMoviesList(backEndList);

let fullList = [];
fullList = showFullList(movieList);
function showFullList(data) {
    const nameList = [];
    for (let movie of data) {
        nameList.push(movie.name + ' ' + movie.year);
    }
    return nameList;
}
let fullListHtml = fullList.length;
let textFull = "<ul>";
for (let i = 0; i < fullListHtml; i++) {
    textFull += "<li>" + fullList[i] + " y</li>";
}
textFull += "</ul>";

Full_list.innerHTML = textFull;

//метод що показує доступні фільми
let availableList = movieList.filter(function (item,) {
    return item.isAvailable === "Yes";
});

let nameAvailableList = [];
nameAvailableList = showName(availableList);
function showName(data) {
    const nameList = [];
    for (let movie of data) {
        nameList.push(movie.name);
    }
    return nameList;
}

let filmTitle = nameAvailableList.length;
let text = "<ul>";
for (let i = 0; i < filmTitle; i++) {
    text += "<li>" + nameAvailableList[i] + "</li>";
}
text += "</ul>";

Movie_list.innerHTML = text;

//метод який показує фільми по їх дюрейшину
function showDuration() {
    let x = Number(document.getElementById("firstduration").value);
    let y = Number(document.getElementById("secondduration").value);

    function Movie(name, duration) {
        this.name = name;
        this.duration = duration;
    }

    let durationList = [];
    durationList = getByDuration(x, y);
    function getByDuration(x, y) {
        let durationBetween = [];
        backEndList.filter(function (item,) {
            if (item.duration >= x && item.duration <= y) {
                durationBetween.push(new Movie(item.name, item.duration));
            }
        })
        return durationBetween;
    };

    let durationListHTML = durationList.length;
    let durationListToHTML = "<ul>";
    for (let i = 0; i < durationListHTML; i++) {
        durationListToHTML += "<li>" + durationList[i].name + " " + durationList[i].duration + " min." + "</li>";
    }
    durationListToHTML += "</ul>";

    Duration_list.innerHTML = durationListToHTML;
}
// Для екшинів
let actionList = movieList.filter(function (item,) {
    return item.genre === "Action";
});

let actionListArray = [];
actionListArray = showAction(actionList);
function showAction(data) {
    const showActionArray = [];
    for (let movie of data) {
        showActionArray.push(movie.name);
    }
    return showActionArray;
}

let actionToHTML = actionListArray.length;
let textAction = "<ol>";
for (let i = 0; i < actionToHTML; i++) {
    textAction += "<li>" + actionListArray[i] + "</li>";
}
textAction += "</ol>";
// Genre_list.innerHTML = textAction;
function showActionList() {
    let text = Genre_list.innerHTML = textAction;
    document.getElementById("genre").innerHTML = "<h3>Action</h3>" + text;
}
document.querySelector("#buttAction").addEventListener("click", showActionList);

// Для драм
let dramaList = movieList.filter(function (item,) {
    return item.genre === "Drama";
});

let dramaListArray = [];
dramaListArray = showDrama(dramaList);
function showDrama(data) {
    const showDramaArray = [];
    for (let movie of data) {
        showDramaArray.push(movie.name);
    }
    return showDramaArray;
}

let dramaToHTML = dramaListArray.length;
let textDrama = "<ol>";
for (let i = 0; i < dramaToHTML; i++) {
    textDrama += "<li>" + dramaListArray[i] + "</li>";
}
textDrama += "</ol>";
//Drama_list.innerHTML = textDrama;

function showDramaList() {
    let list = Genre_list.innerHTML = textDrama;
    document.getElementById("genre").innerHTML = "<h3>Drama</h3>" + list;
};
document.querySelector("#buttDrama").addEventListener("click", showDramaList);
// Для криміналу
let crimeList = movieList.filter(function (item,) {
    return item.genre === "Crime";
});

let crimeListArray = [];
crimeListArray = showCrime(crimeList);
function showCrime(data) {
    const showCrimeArray = [];
    for (let movie of data) {
        showCrimeArray.push(movie.name);
    }
    return showCrimeArray;
}

crimeToHTML = crimeListArray.length;
let textCrime = "<ol>";
for (let i = 0; i < crimeToHTML; i++) {
    textCrime += "<li>" + crimeListArray[i] + "</li>";
}
textCrime += "</ol>";
//Crime_list.innerHTML = textCrime;
function showCrimeList() {
    let list = Genre_list.innerHTML = textCrime;
    document.getElementById("genre").innerHTML = "<h3>Crime</h3>" + list;
}
document.querySelector("#buttCrime").addEventListener("click", showCrimeList);

// Для фентезі
let fantasyList = movieList.filter(function (item,) {
    return item.genre === "Fantasy";
});

let fantasyListArray = [];
fantasyListArray = showFantasy(fantasyList);
function showFantasy(data) {
    const showFantasyArray = [];
    for (let movie of data) {
        showFantasyArray.push(movie.name);
    }
    return showFantasyArray;
}

let fantasyToHTML = fantasyListArray.length;
let textFantasy = "<ol>";
for (let i = 0; i < fantasyToHTML; i++) {
    textFantasy += "<li>" + fantasyListArray[i] + "</li>";
}
textFantasy += "</ol>";
//Fantasy_list.innerHTML = textFantasy;

function showFantasyList() {
    let list = Genre_list.innerHTML = textFantasy;
    document.getElementById("genre").innerHTML = "<h3>Fantasy</h3>" + list;
}
document.querySelector("#buttFantasy").addEventListener("click", showFantasyList);

// Для мультіків

let animatedList = [];

function getAnimatedList(animatedGenre) {
    animatedList = movieList.filter(function (item,) {
        return item.genre === animatedGenre;
    });
}
getAnimatedList("Animated movie")

let animatedListArray = [];
animatedListArray = showAnimated(animatedList);

function showAnimated(data) {
    const showAnimatedArray = [];
    for (let movie of data) {
        showAnimatedArray.push(movie.name);
    }
    return showAnimatedArray;
}

let animatedToHTML = animatedListArray.length;
let textAnimated = "<ol>";
for (let i = 0; i < animatedToHTML; i++) {
    textAnimated += "<li>" + animatedListArray[i] + "</li>";
}
textAnimated += "</ol>";

function showAnimatedList() {
    let list = Genre_list.innerHTML = textAnimated;
    document.getElementById("genre").innerHTML = "<h3>Animated</h3>" + list;
}
document.querySelector("#buttAnimated").addEventListener("click", showAnimatedList);