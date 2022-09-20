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
        })
        .catch(error => {
            console.log(error);
        })
}

fetchData();

// Event Listeners


// HTML