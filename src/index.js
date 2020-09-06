const endPoint = "http://localhost:3000/api/v1/games/"

document.addEventListener('DOMContentLoaded', () => {
    // function call of initial GET request of game profiles
    getGameProfiles();

    // selecting the create new game profile form
    const createNewGameForm = document.querySelector("#create-game-form");

    // event listener on create game profile form to call form handler function upon submit event
    createNewGameForm.addEventListener("submit", (e) =>
        newGameFormHandler(e))

})



// function to GET/display current game profiles upon initial website load 
function getGameProfiles() {
    fetch(endPoint)
    .then(response => response.json())
    .then(games => {
        games.data.forEach(game => {

            let newGame = new Game(game, game.attributes);
            
            document.querySelector("#game-container").innerHTML += newGame.renderGameProfileHTML(); 
        })
    })
}

// function to grab user input values for new game profile form and call
// the POST fetch request function 
function newGameFormHandler(e) {
    e.preventDefault(); 
    const titleInput = document.querySelector('#input-title').value;
    const genreId = parseInt(document.querySelector('#genres').value);
    const imageInput = document.querySelector('#image-url').value;
    const reviewInput = document.querySelector('#input-review').value;
    const ratingInput = parseInt(document.querySelector('#rating').value);
    postFetch(titleInput, genreId, imageInput, reviewInput, ratingInput);
}

// function for POST fetch request for #creating a new Game profile
function postFetch(title, genre_id, image_url, review, rating) {
    const bodyData = {title, genre_id, image_url, review, rating}
    fetch(endPoint, { 
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
    })
    .then(response => response.json())
    .then(game => {
         const gameData = game.data;

         let newGame = new Game(gameData, gameData.attributes) 

         document.querySelector("#game-container").innerHTML += newGame.renderGameProfileHTML(); 
    })
}



