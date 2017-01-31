// sanity check
console.log("App.js is connected!");

$(document).ready(function(){
  var projects = [
  {
		imageAlt: "Memory Card Game screenshot",
		imageUrl: "https://github.com/ychoy/ychoy.github.io/blob/master/assets/img/memory-game.png?raw=true",
		captions: "Memory Card Game",
		description: "I wrote this game using basic Javascript, HTML and CSS. It was fun to take the game to the next level and create a button for players to reset and shuffle a new deck.",
		githubUrl: "https://github.com/ychoy/wdi-fundamentals-memorygame"
		},

  {
  imageAlt: "Super Rentals screenshot",
  imageUrl:   "https://github.com/ychoy/ychoy.github.io/blob/master/assets/img/super%20rentals.png?raw=true",
  captions: "Super Rentals",
  description: "I created this web application using Ember.js, a front-end javascript framework. This applciation allows users to search listings by city.",
  githubUrl: "https://github.com/ychoy/super-rentals"
  },


  {
  imageAlt: "Portfolio screenshot",
  imageUrl: "https://github.com/ychoy/ychoy.github.io/blob/master/assets/img/portfolio.png?raw=true",
  captions: "Portfolio",
  description: "I built this portfolio website to showcase my web development projects. It was challenging updating the website to be compatible with Bootstrap and to use jQuery to update the data on the website.",
  githubUrl: "https://github.com/ychoy/ychoy.github.io"
  },
]
/*
  // adding information on each project on the portfolio grid
  for (var i=0; i < data.length; i++) {
    var captions = data.captions[i];
    console.log(captions);
    $(".caption h3").text(captions);

    var eachParagraph = data.paragraphInfo[i];
      $("p#content").text( eachParagraph );

    var eachParagraph = "";
    console.log(eac

    var githubUrl = data.github_url[i];
    var link = "<a href='" + githubUrl + "'>" +
      "</a>";
    $("p .a.btn.btn-primary").text ( link );
  };

  // adding information about the images
  for (var i=0; i < images.length; i++) {
    $('.img-responsive').attr('src',images + images[i]);
  };

*/
  var samples = "";
  	for (var i = 0; i < projects.length; i++) {
  		samples += `<div class="col-sm-6 col-md-4">
                    <img class="img-responsive" src="${projects[i].imageUrl}" alt="${projects[i].imageAlt}"/></a>
                      <div class="caption">
                        <h3>${projects[i].captions}</h3>
                        <p class="content">${projects[i].description}</p>
                        <p><a href="${projects[i].githubUrl}"class="btn btn-primary" role="button">Learn more</a></p>
                      </div>
                  </div>`
      }
      $(".portfolio #portfolio .row").append(samples);
});
