$(document).ready(function(){
  var projects = [
  {
		imageAlt: "CarpeGov app screenshot",
		imageUrl: "assets/img/ychoy_carpegov.png",
		captions: "CarpeGov",
		description: "Civic engagement tool for administrators to create, read, update, and delete Congressional bills on education and add, show, edit and delete action items taken on the bills. Open source collaboration with my colleague Weston Dombroksi. Technologies used inlude; MongoDb, Mongoose, Express, Node.js, Bootstrap and jQuery",
		githubUrl: "https://github.com/ychoy/carpe-gov",
		liveUrl: "https://carpegov.herokuapp.com"
		},

  {
  imageAlt: "Spotify Search app screenshot",
  imageUrl:   "assets/img/ychoy_spotifysearch.png",
  captions: "Spotify Search",
  description: "Web application that allows users to search for songs on the Spotify API. Technologies used include: jQuery, AJAX, Bootstrap, Spotify API",
  githubUrl: "https://github.com/ychoy/spotify-search-lab",
  liveUrl: "https://ychoy.github.io/spotify-search-lab/"
  },


  {
  imageAlt: "Starship Racing Game screenshot",
  imageUrl: "assets/img/ychoy_racinggame.png",
  captions: "Starship Racing Game",
  description: "Two players can operate starships to race to the final frontier. Technologies used include: HTML, CSS, Bootstrap, jQuery",
  githubUrl: "https://github.com/ychoy/racing-game",
  liveUrl: "https://ychoy.github.io/racing-game/"
  },
]

  var samples = "";
  	for (var i = 0; i < projects.length; i++) {
  		samples += `
  		  <div class="col-sm-6 col-md-4">
          <img class="img-responsive" src="${projects[i].imageUrl}" alt="${projects[i].imageAlt}"/></a>
            <div class="caption">
              <h3>${projects[i].captions}</h3>
              <p class="content">${projects[i].description}</p>
              <p><a href="${projects[i].githubUrl}"class="btn btn-info" role="button">Github</a></p>
              <p><a href="${projects[i].liveUrl}"class="btn btn-primary" role="button">Live</a></p>
            </div>
        </div>`
      }
      $(".portfolio #portfolio .row").append(samples);
});
