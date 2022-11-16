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


// метод для виводу фільмів по жанрах з аргументом через нав бар
function showGenreList(type) {
    let actionList = movieList.filter(function (item,) {
        return item.genre === type;
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
    let text = Genre_list.innerHTML = textAction;
    return document.getElementById("genre").innerHTML = `<h3>${type}</h3>` + text;
}
