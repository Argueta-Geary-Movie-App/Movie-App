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

$('#find-movie').on('click', function () {
    alert("Search button works.");
});

// FETCH GLITCH API
function fetchMovies () {
    fetch('https://aluminum-coral-comic.glitch.me/movies')
        .then(response => {
            console.log(response);
            if(!response.ok) {
                throw Error('ERROR');
            }
            return response.json();
        })
        .then(movieData => {
            console.log(movieData);
            $('#app').innerHTML = '<h1>Hurry Up, Cas!</h1>';
        }).catch(error => {
        console.log(error);
    });
}
fetchMovies();















// "use strict";
// function fetchMovies () {
//     fetch('https://aluminum-coral-comic.glitch.me/movies');
// }
// fetchMovies();
//
// // Search Form Event
// // $(document).ready(() => {
// // // Create event when form is submitted
// //     $('#searchForm').on('click', (e) => {
// //         let searchText = $('#searchText').val();
// //         getMovies(searchText);
// //         // stops form from submitting file
// //         e.preventDefault();
// //     });
// // });
// //
// // //  API URL
// // const api_url = fetch('http://www.omdbapi.com/?apikey=thewdb&t=');
// //
// // //  Define Async Function
// // async function getapi(url) {
// //     //  Storing Response
// //     const response = await fetch(url);
// //     //  Storing Data in form of JSON
// //     let data = await response.json();
// //     console.log(data);
// //     if (response) {
// //         hideloader();
// //     }
// //     show(data);
// // }
// // //  Calling Async Function
// // getapi(api_url);
//
// //  Function Hiding the Loader
// // function hideLoader() {
// //     document.getElementById('loading').style.display = 'none';
// // }
//
// // Function defining innerHTML
// // function show(data) {
// //     let card =
// //         `<article class="card">
// //                <header id="card-header" class="card-header">
// //                    <h2 class="title">${movie.title}</h2>
// //                    <div><img src=${omdbPoster.Poster}></div>
// //                    <div class="rating">Rating: ${movie.rating}</div>
// //                    <div class="genre">Director: ${movie.director}</div>
// //                    <div class="id">${movie.id}</div>
// //                    <button type="button" class="add" onclick="addToMyList()" >Add</button>
// //                     <button type="button" class="edit">Edit</button>
// //                     <button type="button" class="delete">Delete</button>
// //              </header>
// // //         </article>`;
// // }
// // // Setting innerHTML
// // // document.querySelector('#app').insertAdjacentHTML("afterbegin", html);
// // //  Invoke Function
// // show(data);
//
// // LOADER
// document.onreadystatechange = function () {
//     if (document.readyState !== "complete") {
//         document.querySelector("body").style.visibility = "hidden";
//         document.querySelector("#loader").style.visibility = "visible";
//     } else {
//         setTimeout(() => {
//             document.querySelector("#loader").style.display = "none";
//             document.querySelector("body").style.visibility = "visible";
//         }, 1000);
//
//     }
// };
//
//
// // GLITCH & OMDB FETCH
//
// const fetchData = async () => {
//     let glitchData = await fetch("https://aluminum-coral-comic.glitch.me/movies")
//     let glitchJson = await glitchData.json();
//     const html = await Promise.all(glitchJson.map(async movie => {
//         let omdbPoster = await moviePoster(movie.title);
//         // console.log(omdbPoster.Poster);
//         return `<article class="card" style="background: rgb(255,255,255);
// background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,170,1,1) 50%, rgba(0,101,255,1) 100%);">
//                                     <header class="card-header">
//                                         <h2 class="title">${movie.title}</h2>
//                                         <img src=${omdbPoster.Poster}>
//                                         <div class="rating">Rating: ${movie.rating}</div>
//                                         <div class="genre">Director: ${movie.director}</div>
//                                         <div class="id" style="visibility: hidden">${movie.id}</div>
//                                         <button type="button" class="add">Add</button>
//                                         <button type="button" class="edit">Edit</button>
//                                         <button type="button" class="delete">Delete</button>
//                                     </header>
//                                 </article>`
//     }))
//     document.querySelector('#app').insertAdjacentHTML("afterbegin", html);
// }
// fetchData();
//
// // POST (Create)
// // function postData() {
// //     fetch('http://www.omdbapi.com/?apikey=${OMDB_KEY}&', {
// //         method: 'POST',
// //         headers: {
// //             'Content-Type': 'application/json'
// //         },
// //         body: JSON.stringify({
// //
// //         })
// //     })
// //         .then(response => {
// //             if (!response.ok) {
// //                 throw Error("ERROR");
// //             }
// //             return response.json();
// //         })
// //         .then(data => {
// //             console.log(data);
// //         })
// //         .catch(error => {
// //             console.log(error);
// //         });
// // }
// // postData();
//
// // PATCH
// // function patchData() {
// //     fetch("https://reqres.in/api/users", {
// //         method: 'PATCH',
// //         headers: {
// //             'Content-Type': 'application/json'
// //         },
// //         body: JSON.stringify({
// //
// //         })
// //     })
// //         .then(response => {
// //             if (!response.ok) {
// //                 throw Error("ERROR");
// //             }
// //             return response.json();
// //         })
// //         .then(data => {
// //             console.log(data);
// //         })
// //         .catch(error => {
// //             console.log(error);
// //         });
// // }
// // patchData();
//
// // Event Listeners (Possibles: click, hover, scroll, search, submit, toggle)
// $('#find-movie').on('click', function () {
//     // alert("Search button works.");
// });
// // HTML