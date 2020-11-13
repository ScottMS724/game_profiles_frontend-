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
      <div data-id="${this.id}" class="card">
        <div class="col-md-12">
          <div class="card mb-4 shadow-sm">
          <div class="card text-center">
          <div class="card text-white bg-dark mb-3"
            <div class="card-body">

              <img src="${this.image_url}" class="card-img-top" alt="...">

              <u><h1 class="card-title">${this.title}</h1></u>

              <p class="card-text">${this.review}</p>
              
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" data-id="${this.id}" class="btn btn-danger">Delete! <br><small>click twice</small><br></button>
                </div>

                <small>
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
    </div>
    </div>
    `
   
    }
}

Game.all = []; 