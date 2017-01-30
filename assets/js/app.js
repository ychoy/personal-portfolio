// sanity check
console.log("App.js is connected!");

$(document).on('ready', function(){
  var data = {
    "captions": [
       "Memory Card Game", "Super Rentals", "Portfolio"
     ],

      "github_url": [
        "https://github.com/ychoy/wdi-fundamentals-memorygame",
        "https://github.com/ychoy/super-rentals",
        "https://github.com/ychoy/ychoy.github.io",
      ],

      "paragraphInfo": [
        "I wrote this game using basic Javascript, HTML and CSS. It was fun to take the game to the next level and create a button for players to reset and shuffle a new deck.",
        "I created this web application using Ember.js, a front-end javascript framework. This applciation allows users to search listings by city.",
        "I built this portfolio website to showcase my web development projects. It was challenging updating the website to be compatible with Bootstrap and to use jQuery to update the data on the website."
      ]
    }

  var images =[
      "https://github.com/ychoy/ychoy.github.io/blob/master/assets/img/memory-game.png?raw=true",
      "https://github.com/ychoy/ychoy.github.io/blob/master/assets/img/super%20rentals.png?raw=true",
      "https://github.com/ychoy/ychoy.github.io/blob/master/assets/img/portfolio.png?raw=true"
    ]

  // adding information on each project on the portfolio grid
  for (var i=0; i < data.length; i++) {
    var captions = data.captions[i];
    $(".caption h3").text(captions);

    var eachParagraph = data.paragraphInfo[i];
      $("p#content").text( eachParagraph );

    var eachParagraph = "";

    var githubUrl = data.github_url[i];
    var link = "<a href='" + githubUrl + "'>" +
      "</a>";
    $("p .a.btn.btn-primary").text ( link );
  };

  // adding information about the images
  for (var i=0; i < images.length; i++) {
    $('.img-responsive').attr('src',images + images[i]);
  };
});
