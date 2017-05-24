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
    about: "I developed the direct messaging feature, performed integration tests, and refactored code for OOP design. I also drafted user stories and sprint specifications, and designed chatroom sidebar and forms. I collaborate with Thelma and Will to persist two models with Active Record, develop the Chatroom feature and enable user login.",
    projectType: "Open source collaboration built with Thelma Boamah and Will Kaspar. Consulted UX/UI designer Luke Swanson.",
    tech: "HTML, CSS, jQuery, Semantic UI, Rails, Action Cable, WebSockets, Devise, Carrierwave, PostgreSQL",
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
    tech: "HTML, CSS, Bootstrap, Rails, PostgreSQL",
    githubUrl: "https://github.com/ychoy/vagabond",
		liveUrl: "https://levagabond.herokuapp.com"
		},
    {
	  imageAlt: "CarpeGov app screenshot",
	  imageUrl: "assets/img/ychoy_carpegov.png",
	  captions: "CarpeGov",
	  description: "Track Congressional bills on education and add and track actions taken on those bills.",
	  about: "I built CRUD functionality for users to create, edit, update and delete action items, persisted two models with MongoDB, and styled the frontend with Bootstrap. I collaborated with Weston to craft wireframes, ERDs and user stories.",
	  projectType: "Open source collaboration built with Weston Dombroski",
	  tech: "MongoDB, Mongoose, Express, Node.js, Bootstrap, jQuery",
	  githubUrl: "https://github.com/ychoy/carpe-gov",
	  liveUrl: "https://carpegov.herokuapp.com"
	  },
    {
      imageALt: "Find A Home",
      imageUrl: "assets/img/findahome_may2017_thumbnail.png",
      captions: "Find A Home",
      description: "Find affordable housing near you.",
      about: "I consulted local government partner to obtain data on affordable housing listings. I received incomplete listing data in PDF format from the partner company. I collaborated with Tyler to code web scraping algorithms in Ruby to parse data. I recruited developers and collaborated to craft wireframes and roadmap. I updated schema for data model in PostgreSQL. I developed and designed index view and map markers display for all listings.",
      projectType: "Open source collaboration built with Tyler Hampton and Angelique de Castro",
      tech: "Rails, Ember, Node, PostgreSQL, Redis, Google Maps API, Geocoder, Semantic UI",
      githubUrl: "http://github.com/codeforsanjose/findahome",
      liveUrl: "https://github.com/codeforsanjose/findahome"
    }
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
