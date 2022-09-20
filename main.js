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
$('.find-movie').on(click(function () {

}))
document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};

// HTML