$(document).ready(function(){
  var projects = [
  {
		imageAlt: "Rydeshare app screenshot",
		imageUrl: "assets/img/ychoy_rydeshare.png",
		captions: "Rydeshare",
		description: "Rydeshare is a web application for users to search for carpool trips based on departures, join and create carpools. I ideated, designed, and built RESTful CRUD functionality for users to create and join carpools. I developed a search feature that queries Google Maps API and displays markers on a dynamic map. Technologies: HTML, CSS, jQuery, Semantic UI, Rails, Google Maps API, Geocoder, Devise, PostgreSQL.",
		githubUrl: "https://github.com/ychoy/rydeshare",
		liveUrl: "https://rydeshare.herokuapp.com"
		},

 {
		imageAlt: "WeHuddle app screenshot",
		imageUrl: "assets/img/ychoy_wehuddle.png",
		captions: "WeHuddle",
		description: "WeHuddle is a responsive web application that allows users to chat in real-time. Open source collaboration built with Thelma Boamah and Will Kaspar. I developed the direct messaging feature, created integration tests, and refactored code for OOP design. I also drafted user stories and sprint specifications, and designed chatroom sidebar and forms. Technologies: HTML, CSS, jQuery, Semantic UI, Rails, Action Cable, Websockets, Devise, Carrierwave, PostgreSQL.",
		githubUrl: "https://github.com/ychoy/wehuddle",
		liveUrl: "https://wehuddle.herokuapp.com"
		},
  {
		imageAlt: "Le Vagabond app screenshot",
		imageUrl: "assets/img/ychoy_levagabond.png",
		captions: "Le Vagabond",
		description: "Le Vagabond is a web application for users to create and share hints on their favorite cities. I built CRUD functionality for users to create, edit, delete comments to travel hints. I also developed the main dashboard page, login and user authentication page. I also consulted UX/UI designers and implemented advice for responsive front end design. Le Vagabond is an open source web application built in collaboration with Christen Williams and Auston Wilkinson.",
		githubUrl: "https://github.com/ychoy/vagabond",
		liveUrl: "https://levagabond.herokuapp.com"
		},
  // {
	// 	imageAlt: "CarpeGov app screenshot",
	// 	imageUrl: "assets/img/ychoy_carpegov.png",
	// 	captions: "CarpeGov",
	// 	description: "Civic engagement tool for administrators to create, read, update, and delete Congressional bills on education and add, show, edit and delete action items taken on the bills. Open source collaboration with Weston Dombroksi. Technologies used: MongoDb, Mongoose, Express, Node.js, Bootstrap, jQuery.",
	// 	githubUrl: "https://github.com/ychoy/carpe-gov",
	// 	liveUrl: "https://carpegov.herokuapp.com"
	// 	},
  //
  // {
  // imageAlt: "Spotify Search app screenshot",
  // imageUrl:   "assets/img/ychoy_spotifysearch.png",
  // captions: "Spotify Search",
  // description: "Web application that allows users to search for songs on the Spotify API. Technologies used include: jQuery, AJAX, Bootstrap, Spotify API",
  // githubUrl: "https://github.com/ychoy/spotify-search-lab",
  // liveUrl: "https://ychoy.github.io/spotify-search-lab/"
  // },
  //
  //
  // {
  // imageAlt: "Starship Racing Game screenshot",
  // imageUrl: "assets/img/ychoy_racinggame.png",
  // captions: "Starship Racing Game",
  // description: "Two players can operate starships to race to the final frontier. Technologies used include: HTML, CSS, Bootstrap, jQuery",
  // githubUrl: "https://github.com/ychoy/racing-game",
  // liveUrl: "https://ychoy.github.io/racing-game/"
  // },
]

  var samples = "";
  	for (var i = 0; i < projects.length; i++) {
  		samples += `
  		  <div class="col-md-12">
          <img class="img-responsive" src="${projects[i].imageUrl}" alt="${projects[i].imageAlt}"/></a>
            <div class="caption">
              <h3>${projects[i].captions}</h3>
              <p class="content">${projects[i].description}</p>
              <p><a href="${projects[i].githubUrl}"class="btn btn-success" role="button">Github</a></p>
              <p><a href="${projects[i].liveUrl}"class="btn btn-primary" role="button">Live</a></p>
            </div>
        </div>`
      }
      $(".portfolio #portfolio .row").append(samples);
});
