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

    // render function for card HTML markup of game profiles
    renderGameProfileHTML() {
    return `
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <div class="card-body">

              <img src="${this.image_url}" class="card-img-top" alt="...">

              <u><h5 class="card-title">${this.title}</h5></u>

              <p class="card-text">${this.review}</p>
              
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-primary">Edit</button>
                  <button type="button" class="btn btn-danger">Delete</button>
                </div>

                <small class="text-muted">
                Genre: ${this.genre.name}
                <br>
                My Rating: ${this.rating}/10
                </small>
                
              </div>
            </div>
          </div>
        </div>
    `

        // return `
        //     <div data-id=${this.id}>
        //         <h3>${this.title}</h3>
        //         <p>${this.genre.name}</p>
        //         <img src=${this.image_url} height="200" width="250">
        //         <br>
        //         <textarea data-id=${this.id} rows="4" cols="50">${this.review}</textarea>
        //         <p>Rating: ${this.rating}/10</p>
        //         <button data-id=${this.id}>Edit</button>
        //     </div>
        //     <br><br>`;
    }
}

Game.all = []; 