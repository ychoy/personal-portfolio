$(document).ready(function(){
  var projects = [
  {
		imageAlt: "Rydeshare app screenshot",
		imageUrl: "assets/img/ychoy_rydeshare.png",
		captions: "Rydeshare",
		description: "Create, join and search for carpools to save time and money and reduce stress on the commute  ",
    about: "I ideated, designed, and built RESTful CRUD functionality for users to create and join carpools. I developed a search feature that queries Google Maps API and displays markers on a dynamic map.",
		projectType: "I was the designer and developer",
    tech: "HTML, CSS, jQuery, Semantic UI, Rails, Google Maps API, Geocoder, Devise, PostgreSQL",
    githubUrl: "https://github.com/ychoy/rydeshare",
		liveUrl: "https://rydeshare.herokuapp.com"
		},

 {
		imageAlt: "WeHuddle app screenshot",
		imageUrl: "assets/img/ychoy_wehuddle.png",
		captions: "WeHuddle",
		description: "Chat in real-time and empower your teams to collaborate more  ",
    about: "I developed the direct messaging feature, performed integration tests, and refactored code for OOP design. I also drafted user stories and sprint specifications, and designed chatroom sidebar and forms.",
    projectType: "Open source collaboration built with Thelma Boamah and Will Kaspar. Consulted UX/UI designer Luke Swanson.",
    tech: "HTML, CSS, jQuery, Semantic UI, Rails, Action Cable, Websockets, Devise, Carrierwave, PostgreSQL",
		githubUrl: "https://github.com/ychoy/wehuddle",
		liveUrl: "https://wehuddle.herokuapp.com"
		},
  {
		imageAlt: "Le Vagabond app screenshot",
		imageUrl: "assets/img/ychoy_levagabond.png",
		captions: "Le Vagabond",
		description: "Create and share hints on your favorite cities  ",
    about: "I built CRUD functionality for users to create, edit, delete comments to travel hints. I also developed the main dashboard page, login and user authentication page. I also consulted UX/UI designers and implemented advice for responsive front end design.",
    projectType: "Open source collaboration built with Christen Williams and Auston Wilkinson. Consulted UX/UI designers Daniel Peck, Katie Yi, Seungjae Yun and Urvi Jain.",
    tech: "HTML, CSS, Bootstrap, Ruby on Rails, Devise, PostgreSQL",
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
        <div class="row">
  		    <div class="col-sm-6 col-md-4">
          <br>
            <div class="thumbnail">
              <img class="img-responsive" src="${projects[i].imageUrl}" alt="${projects[i].imageAlt}"/></a>
            </div>
          </div>
          <div class="col-sm-6 col-md-8">
            <h3><a href="${projects[i].liveUrl}">${projects[i].captions}</a></h3>
            <h3><em>${projects[i].description}</em><a href="${projects[i].githubUrl}"><img src="assets/img/github.png" alt="Github" class="social-icon"></a></h3>
            <p>${projects[i].about}</p>
            <p><strong>Team: </strong>${projects[i].projectType}</p>
            <p><strong>Technologies: </strong>${projects[i].tech}</p>
          </div>
        </div>
        <br>
        `
      }
      $(".portfolio #portfolio").append(samples);
});
