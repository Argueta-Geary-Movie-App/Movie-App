"use strict";

// API
function fetchData() {
    console.log("START FETCH");
    fetch("https://aluminum-coral-comic.glitch.me/movies")
        .then(response => {
            console.log(response); //RESPONSE BODY
            // const data = response.json();
            // console.log(data);
            return response.json()
        })
        .then(data => {
            console.log(data);
            console.table([data])
            const html = data.map(movie => {
                return `<article class="card">
                                    <header class="card-header">
                                        <h2 class="title">${movie.title}</h2>
                                        <div class="rating">Rating: ${movie.rating}</div>
                                        <div class="genre">Director: ${movie.director}</div>
                                        <div class="id">${movie.id}</div>
                                        <button type="button" class="edit">Edit</button>
                                        <button type="button" class="delete">Delete</button>
                                    </header>
                                </article>`
            }).join("")
            console.log(html);
           document.querySelector('#app').insertAdjacentHTML("afterbegin", html);
        })
        .catch(error => {
            console.log(error);
        });
}

fetchData();

// Event Listeners

// HTML