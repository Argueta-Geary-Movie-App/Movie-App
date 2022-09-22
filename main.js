"use strict";
// LOADER
document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        setTimeout(() => {
            document.querySelector("#loader").style.display = "none";
            document.querySelector("body").style.visibility = "visible";
        }, 1000);

    }
};

// OMDB FETCH
const moviePoster = async (title) => {
    let posterData = await fetch(`http://www.omdbapi.com/?apikey=thewdb&t=${title}`)
    let posterJson = await posterData.json();
    return posterJson;
}

// GLITCH & OMDB FETCH
const fetchData = async () => {
    let glitchData = await fetch("https://aluminum-coral-comic.glitch.me/movies")
    let glitchJson = await glitchData.json();
    const html = await Promise.all(glitchJson.map(async movie => {
        let omdbPoster = await moviePoster(movie.title);
        console.log(omdbPoster.Poster);
        return `<article class="card background-image: url">
                                    <header class="card-header">
                                        <h2 class="title">${movie.title}</h2>
                                        <div><img src=${omdbPoster.Poster}></div>
                                        <div class="rating">Rating: ${movie.rating}</div>
                                        <div class="genre">Director: ${movie.director}</div>
                                        <div class="id">${movie.id}</div>
                                        <button type="button" class="add">Add</button>
                                        <button type="button" class="edit">Edit</button>
                                        <button type="button" class="delete">Delete</button>
                                    </header>
                                </article>`
    }))
    document.querySelector('#app').insertAdjacentHTML("afterbegin", html);
}
fetchData();

// POST (Create)
function postData() {
    fetch("https://reqres.in/api/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: "morpheus",
            job: "leader"
        })
    })
        .then(response => {
            if (!response.ok) {
                throw Error("ERROR");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
}

postData();

// Event Listeners

// HTML