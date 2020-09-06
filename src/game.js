class Game {

    constructor(gameJSONHashId, gameJSONHashAttributes) {
        this.id = gameJSONHashId.id; 
        this.title = gameJSONHashAttributes.title;
        this.genre = gameJSONHashAttributes.genre;
        this.image_url = gameJSONHashAttributes.image_url;
        this.review = gameJSONHashAttributes.review;
        this.rating = gameJSONHashAttributes.rating;
        Game.all.push(this); 
    }

    // render function for HTML markup of game profiles
    renderGameProfileHTML() {
        return `
            <div data-id=${this.id}>
                <h3>${this.title}</h3>
                <p>${this.genre.name}</p>
                <img src=${this.image_url} height="200" width="250">
                <br>
                <textarea data-id=${this.id} rows="4" cols="50">${this.review}</textarea>
                <p>Rating: ${this.rating}/10</p>
                <button data-id=${this.id}>Edit</button>
            </div>
            <br><br>`;
    }
}

Game.all = []; 