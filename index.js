const endPoint = "http://localhost:3000/api/v1/games/"

document.addEventListener('DOMContentLoaded', () => {
    getGameProfiles();
})

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

