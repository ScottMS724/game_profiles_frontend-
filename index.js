const endPoint = "http://localhost:3000/api/v1/games/"

document.addEventListener('DOMContentLoaded', () => {
    fetch(endPoint)
    .then(response => response.json())
    .then(games => {
        console.log(games);
    })
})

