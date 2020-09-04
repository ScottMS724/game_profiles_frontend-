const endPoint = "http://localhost:3000/api/v1/games/"

document.addEventListener('DOMContentLoaded', () => {
    getGameProfiles();

    // selecting the create new game profile form
    const createNewGameForm = document.querySelector("#create-game-form");

    // event listener on new game profile form to call submit function
    createNewGameForm.addEventListener("submit", (e) =>
        newGameFormHandler(e))

})

// function to get current game profiles
function getGameProfiles() {
    fetch(endPoint)
    .then(response => response.json())
    .then(games => {
        games.data.forEach(game => {
            const gameHTMLMarkup = `
                <div data-id=${game.id}>
                    <h3>${game.attributes.title}</h3>
                    <p>${game.attributes.genre.name}</p>
                    <img src=${game.attributes.image_url} height="200" width="250">
                    <br>
                    <textarea data-id=${game.id} rows="4" cols="50">${game.attributes.review}</textarea>
                    <p>Rating: ${game.attributes.rating}/10</p>
                    <button data-id=${game.id}>Edit</button>
                </div>
                <br><br>`;

                document.querySelector('#game-container').innerHTML += gameHTMLMarkup;
        })
    })
}

// function to grab user input values for new game profile form and inititate
// the POST fetch request
function newGameFormHandler(e) {
    e.preventDefault(); 
    const titleInput = document.querySelector('#input-title').value;
    const genreId = parseInt(document.querySelector('#genres').value);
    const imageInput = document.querySelector('#image-url').value;
    const reviewInput = document.querySelector('#input-review').value;
    const ratingInput = parseInt(document.querySelector('#rating').value);
    postFetch(titleInput, genreId, imageInput, reviewInput, ratingInput);
}

// POST fetch request for #creating a new Game profile
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

         const gameHTMLMarkup = `
                <div data-id=${game.id}>
                    <h3>${gameData.attributes.title}</h3>
                    <p>${gameData.attributes.genre.name}</p>
                    <img src=${gameData.attributes.image_url} height="200" width="250">
                    <br>
                    <textarea data-id=${game.id} rows="4" cols="50">${gameData.attributes.review}</textarea>
                    <p>Rating: ${gameData.attributes.rating}/10</p>
                    <button data-id=${game.id}>Edit</button>
                </div>
                <br><br>`;

                document.querySelector("#game-container").innerHTML += gameHTMLMarkup;
    })
}



