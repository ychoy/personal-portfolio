// sanity check
console.log("App.js is connected!");

$(document).on('ready', function(){
var data = {
  "portfolio": [
    {
      "image_url": "assets/img/memory-game.jpg",
			"image_alt": "Memory Card Game screenshot",
			"caption": "Memory Card Game",
			"info": "I wrote this game using basic Javascript, HTML and CSS. It was fun to take the game to the next level and create a button for players to reset and shuffle a new deck.",
      "github_url": "https://github.com/ychoy/wdi-fundamentals-memorygame",
		},
		{
      "image_url": "assets/img/super-rentals.jpg",
			"image_alt": "Super Rentals screenshot",
			"caption": "Super Rentals",
			"info": "I created this web application using Ember.js, a front-end javascript framework. This applciation allows users to search listings by city.",
      "github_url": "https://github.com/ychoy/super-rentals",
    },
    {
      "image_url": "assets/img/portfolio.png",
			"image_alt": "Portfolio screenshot",
			"caption": "Portfolio",
			"info": "I built this portfolio website to showcase my web development projects. It was challenging updating the website to be compatible with Bootstrap and to use jQuery to update the data on the website.",
      "github_url": "https://github.com/ychoy/ychoy.github.io",
    }
  ],
}

  // adding information on each project on the portfolio grid
  for (var i=0; i < portfolio.length; i++) {
    var paragraphInfo = data.portfolio[i];
    var item = portfolio.info;
    $(".caption h3 p").text( item );
  }

	// adding captions for each project
	for (var i=0; i < portfolio.length; i++) {
    var captions = data.portfolio[i];
    var item = portfolio.caption;
    $(".caption h3").text( item );
  }
  // adding information about the github link
  for (var i=0; i < portfolio.length; i++) {
    var link = (
      "<a href='" + github_url + "'>" +
      "</a>"
    );
    $(".caption h3 a").append( link );
  }
  // adding information about the images
  for (var i=0; i < portfolio.length; i++) {
		var imageUrl = data.portfolio[i];
		var item = imageURL;

		$(".thumbnail img").attr({
    	src: data.portfolio.image_url,
    	alt: data.portfolio.image_alt
			});

	}
});

