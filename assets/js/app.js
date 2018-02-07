$(document).ready(function(){
  var projects = [
  {
    imageAlt: "Descartaê",
    imageUrl: "assets/img/descartae.png", 
    captions: "Descartaê Web Portal",
    description: "Web portal for librarians to manage data about recycling and waste disposal facilities in Brazil",
    about: "What if technology was made with libraries and the people it impacts? During Caravan Studios' Feito na Biblioteca ('Made with Libraries') design thinking sessions, community members identified issues and prototyped solutions. One of the winners was Lixo Legal, a prototype for discovering where and what to recycle. <br/><br/>Waste disposal is a huge issue in Brazil. Through a mobile app, people would be empowered to recycle more by finding nearby recycling facilities. Through a web application, librarians would find and manage the data. <br/><br/>I collaborated with internal staff and multidisciplinary teams in Brazil to define and maintain project roadmap, articulating strategy to reach our goals. I work with engineer teams in Brazil to create open source solutions - iOS and Android mobile applications and web portal. I design and build the web portal user interface with React, GraphQL and Apollo Client. Additionally, I drive product development meetings.", 
    role: "Front End Developer & Product Manager",
    projectType: "Team Project",
    tech: "React ・Apollo ・GraphQL・Node.js・Express・MongoDB・Material-UI",
    githubUrl: "https://github.com/descartae/webportal",
    liveUrl: "http://beta.descartae.com"  
    },
  {
    imageAlt: "Renter's Rights Guide",
    imageUrl: "assets/img/CFSJ_rentersrightsguide_app.png",
    captions: "Renter's Rights Guide",
    description: "Helping renters in San Jose, CA understand their rights and resources",
    about: "Concerned about the housing crisis in Silicon Valley, I collaborated with my friends at Code for San Jose to build a web app that would help inform renters about their rights. <br/><br/>I led a team of developers and UX researchers to conduct user research, testing, and stakeholder engagement. I designed and developed the user interface with Rails and React. As team lead, I drive product development and planning meetings. <br/><br/> Since launching in September 2017, I have presented at Innovate Your State and Brigade Congress. I also secured two grants from the Awesome Foundation and the San Jose Mayor's Office.",
    role: "Software Engineer and Product Manager",
    projectType: "Team Project",
    tech: "Rails ・React・React-on-Rails・PostgreSQL",
    githubUrl: "https://github.com/codeforsanjose/renters-rights",
    liveUrl: "https://renters-rights.herokuapp.com/"  
    },
  {
    imageAlt: "Choose Your Win",
    imageUrl: "assets/img/chooseyourwin.jpg",
    captions: "Choose Your Win",
    description: "Navigating issues that affect women in the workplace through an interactive game",
    about: "I collaborated with friends at Hack the Patriarchy hackathon to design and create this interactive game that allows users to navigate issues that affect women in the workplace, beginning with the hiring process. <br/><br/>I contributed to user stories, conducted research with a subject matter expert from the Women's Bureau, and designed and coded the gameplay pages with JavaScript, HTML and CSS. I worked with Thelma Boamah, Emily Ramos, Maliha Ahmed and Lorin Camargo. Our team won 'Most Original Project'! ", 
    role: "Front End Developer",
    projectType: "Team Project",
    tech: "JavaScript・HTML・CSS",
    githubUrl: "https://github.com/ychoy/chooseyourwin",
    liveUrl: "https://yanyinchoy.com/chooseyourwin/"  
    },
  {
		imageAlt: "Rydeshare app screenshot",
		imageUrl: "assets/img/ychoy_rydeshare.png",
		captions: "Rydeshare",
		description: "Create, join and search for carpools to save time and money and reduce stress on the commute  ",
    about: "I was inspired to build Rydeshare because of my long commute from San José to San Francisco. I built CRUD fundtionality for users to create, edit, and remove their carpools. I also created functionality for users to join and leave carpools. I developed a search feature that queries Google Maps API and displays markers on a dynamic map.",
		role: "Full Stack Developer & Designer",
    projectType: "Solo Project",
    tech: "Rails・Google Maps API・Geocoder・PostgreSQL・HTML・CSS・jQuery・Devise・Semantic UI SASS・Heroku",
    githubUrl: "https://github.com/ychoy/rydeshare",
		liveUrl: "https://rydeshare.herokuapp.com"
		},
/* {
    imageALt: "Find A Home",
    imageUrl: "assets/img/findahome_may2017_thumbnail.png",
    captions: "Find A Home",
    description: "Find affordable housing near you",
    about: "Concerned about the Bay Area housing crisis, I wanted to address the difficulties of finding affordable housing by building a web application to improve the process. In December 2016 I began to collaborate with Tyler Hampton and Angelique De Castro to brainstorm user stories, sprint specifications and wireframes. I collaborated with Tyler to code web scraping algorithms in Ruby to parse afforadble housing data. I collaborated with Julie Kim - UX/UI designer, Emily Ramos - Developer, Sanaz Jamloo - Developer, to conduct user research. <br/><br/>I migrated the schema with Rails Active Record and PostgreSQL. I also developed and designed the dashboard and and map markers display for affordable housing listings.",
    role: "Full Stack Developer & Project Manager",
    projectType: "Team Project",
    tech: "Rails・Ember・Node・PostgreSQL・Redis・Google Maps API・Geocoder・Semantic UI SASS",
    githubUrl: "http://github.com/codeforsanjose/findahome",
    liveUrl: "https://github.com/codeforsanjose/findahome"
    },
*/
 {
		imageAlt: "WeHuddle app screenshot",
		imageUrl: "assets/img/ychoy_wehuddle.png",
		captions: "WeHuddle",
		description: "Chat in real-time and empower your teams to collaborate more  ",
    about: "I developed the direct messaging feature, designed chatroom sidebar and forms, and drafted user stories and sprint specifications. I pair programmed with developers to persist two models with Rails Active Record and PostgreSQL, develop CRUD functionality for users to create, update and delete chatrooms with Action Cable and WebSockets, and user authentication with Devise.",
    role: "Full Stack Developer",
    projectType: "Team Project",
    tech: "HTML・CSS・jQuery・Semantic UI・ Rails・Action Cable・WebSockets・Devise・Carrierwave・PostgreSQL・rSpec Rails・Heroku",
		githubUrl: "https://github.com/ychoy/wehuddle",
		liveUrl: "https://wehuddle.herokuapp.com"
		},
/*
  {
		imageAlt: "Le Vagabond app screenshot",
		imageUrl: "assets/img/ychoy_levagabond.png",
		captions: "Le Vagabond",
		description: "Create and share hints on your favorite cities  ",
    about: "Le Vagabond is a web application built for a client. The web app allows users to share hints about their favorite cities throughout their travels. I collaborated with Christen Williams and Auston Wilkinson to build this web app. <br/><br/>  I developed the CRUD functionality for users to create, edit, delete comments to travel hints. I also developed the main dashboard page and user login page and incorporated user authentication. <br><br> We reviewed user experience with UX/UI designers Daniel Peck, Katie Yi, Seungjae Yun, Justin Wong, Harry Byres, and Urvi Jain. Based on feedback from our client and designers, we adjusted features to enrich user experience.",
    role: "Full Stack Developer",
    projectType: "Team Project",
    tech: "HTML・CSS・Bootstrap・Rails・PostgreSQL・ Heroku",
    githubUrl: "https://github.com/ychoy/vagabond",
		liveUrl: "https://levagabond.herokuapp.com"
		},
    {
	  imageAlt: "CarpeGov app screenshot",
	  imageUrl: "assets/img/ychoy_carpegov.png",
	  captions: "CarpeGov",
	  description: "Track Congressional bills on education and track actions taken on those bills.",
	  about: "How do we inspire people to get more involved in politics? I collaborated with Weston Dombroski on this open source project to empower users to track Congressional bills on education and action items. <br/><br/> I built CRUD functionality for users to create, edit, update and delete action items, persisted two models with MongoDB and Mongoose, and styled the frontend with Bootstrap. I collaborated with Weston to craft wireframes, entity relationship diagram and user stories.",
    role: "Full Stack Developer",
    projectType: "Team Project",
	  tech: "MongoDB・Mongoose・Express・Node.js・Bootstrap・HTML・CSS・jQuery・Heroku",
	  githubUrl: "https://github.com/ychoy/carpe-gov",
	  liveUrl: "https://carpegov.herokuapp.com"
	  }
*/
]

  var samples = "";

	for (var i = 0; i < projects.length; i++) {
		samples += `
      <div class="row">
		    <div class="col-sm-6 col-md-6">
          <div class="thumbnail">
            <a href="${projects[i].liveUrl}"><img class="img-responsive" src="${projects[i].imageUrl}" alt="${projects[i].imageAlt}"/></a>
          </div>
        </div>
        <div class="col-sm-6 col-md-6">
          <h3><a href="${projects[i].liveUrl}">${projects[i].captions}</a> </h3>
          <h4 style: "color: darkcyan"><em>${projects[i].description}</em></h4>
          <p>${projects[i].about} <a href="${projects[i].githubUrl}"><i class="fa fa-github" aria-hidden="true"></i></a></p>
          <p><i class="fa fa-user" aria-hidden="true"></i> ${projects[i].role}, ${projects[i].projectType}</p>
          <p><i class="fa fa-wrench" aria-hidden="true"></i> ${projects[i].tech}</p>
        </div>
      </div>
      <br/>
      `
    }

    $(".projects #projects").append(samples);
});

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});
