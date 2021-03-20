const endPoint = "https://boiling-coast-39752.herokuapp.com/api/v1/games" 

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Content Loaded. In index.js."); 
    // function call of initial fetch GET request of game profiles
    getGameProfiles();

    // selecting the create new game profile form
    const createNewGameForm = document.querySelector("#create-game-form");

    // event listener on create game profile form to call form handler function upon submit event
    createNewGameForm.addEventListener("submit", (e) =>
        newGameFormHandler(e));

    // selecting a specific profiles' delete button and attaching click event listener
     window.addEventListener("click", (e) => {
        if (e.target.className == "btn btn-danger") {
            let deleteButton = e.target 
            let id = deleteButton.dataset.id 
            let deleteButtonSelect = document.querySelector(`[data-id="${id}" ]`);
            // alert("Are you sure? Click the delete button again to confirm the deletion.")
            deleteButtonSelect.addEventListener("click", (e) => {
                deleteGameFetch();
            })
        }
    })
})




// fetch function to GET/display current game profiles upon initial website load 
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

// fetch function for POST request for #creating a new Game profile
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

         let newGame = new Game(gameData.id, gameData.attributes) 

         document.querySelector("#game-container").innerHTML += newGame.renderGameProfileHTML(); 
    })
}

function deleteGameFetch() {
    console.log("deleteGameFetch() called.")
    let gameDataId = event.target.dataset.id;
        fetch(`https://boiling-coast-39752.herokuapp.com/api/v1/games/${gameDataId}`, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then((json) => {
            let selectedGame = document.querySelector(
                `.card[data-id="${gameDataId}"]`
            );
            selectedGame.remove();
        });
}