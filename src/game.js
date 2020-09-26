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
      <div data-id="${this.id} class="card">
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <div class="card-body">

              <img src="${this.image_url}" class="card-img-top" alt="...">

              <u><h5 class="card-title">${this.title}</h5></u>

              <p class="card-text">${this.review}</p>
              
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-primary">Edit</button>
                  <button type="button" data-id="${this.id}" class="btn btn-danger">Delete! <br><small>click twice</small><br></button>
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
      </div>
    </div>
    `
   
    }
}

Game.all = []; 