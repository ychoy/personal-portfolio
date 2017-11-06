$(document).ready(function(){

  var projects = [
  {
    imageAlt: "Renter's Rights Guide",
    imageUrl: "assets/img/CFSJ_rentersrightsguide_app.png",
    captions: "Renter's Rights Guide",
    description: "Helping renters in San Jose, CA understand their rights and resources",
    about: "Concerned about the housing crisis in Silicon Valley, I collaborated with my friends at Code for San Jose to build a web app that would help inform renters in San Jose, California about the laws and programs in place to protect them. We began by conducting user research and stakeholder engagement. After synthesizing our findings, we decided to focus on developing a prototype on tenant rights. I contributed by developing user interface and front-end with React and Rails, managing workflow, conducting user research, and engaging stakeholders. I collaborated with Matt King - Developer, Julie Kim - UX Researcher & Designer, Sanaz Jamloo - UX Researcher, and Emily Ramos - UX Researcher.",
    role: "Developer",
    projectType: "Team Project",
    tech: "Rails ・React・React-on-Rails・PostgreSQL",
    githubUrl: "https://github.com/codeforsanjose/renters-rights",
    liveUrl: "https://renters-rights.herokuapp.com/"  
    },
  {
    imageAlt: "Choose Your Win",
    imageUrl: "assets/img/ChooseYourWin.png",
    captions: "Choose Your Win",
    description: "Navigating issues that affect women in the workplace through an interactive game",
    about: "I collaborated with friends at Hack the Patriarchy to design and create this interactive game that allows users to navigate issues that affect women in the workplace, beginning with the hiring process. I contributed to user stories, conducted research with a subject matter expert from the Women's Bureau, and designed and coded the gameplay pages with JavaScript, HTML and CSS. I worked with Thelma Boamah, Emily Ramos, Maliha Ahmed and Lorin Camargo. Our team won 'Most Original Project'! ", 
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
    about: "I was inspired to build Rydeshare because of my long commute from San José to San Francisco, which was often affected by public transit issues or traffic. Rydeshare allows users to create accounts, create carpool rides as a driver, join other drivers' carpools, and filter carpool departures on a map. I built CRUD fundtionality for users to create, edit, and remove their carpools. I also created CRUD functionality for users to join and leave carpools. I developed a search feature that queries Google Maps API and displays markers on a dynamic map.",
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
    about: "Growing up in the San Francisco Bay Area, I have noticed that rents continue to rise. I wanted to address the difficulties of finding affordable housing by building a web application to improve the process. In December 2016 I began to collaborate with Tyler Hampton and Angelique De Castro to brainstorm user stories, sprint specifications and wireframes. I collaborated with Tyler to code web scraping algorithms in Ruby to parse afforadble housing data. I collaborated with Julie Kim - UX/UI designer, Emily Ramos - Developer, Sanaz Jamloo - Developer, to conduct user research. <br><br>I migrated the schema with Rails Active Record and PostgreSQL. I also developed and designed the dashboard and and map markers display for affordable housing listings.",
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
    about: "I worked with Thelma Boamah and Will Kaspar to develop the real-time chat application. We wanted to learn more about Rails Action Cable and WebSockets, and create a tool that could empower teams to work better together. We consulted UX/UI designer Luke Swanson to improve user interface. I developed the direct messaging feature, designed chatroom sidebar and forms, and drafted user stories and sprint specifications. I collaborated with Thelma and Will to persist two models with Rails Active Record and PostgreSQL, develop CRUD functionality for users to create, update and delete chatrooms with Action Cable and WebSockets. We also created functionality for users to create, update and remove their accounts with Devise.",
    role: "Full Stack Developer",
    projectType: "Team Project",
    tech: "HTML・CSS・jQuery・Semantic UI・ Rails・Action Cable・WebSockets・Devise・Carrierwave・PostgreSQL・rSpec Rails・Heroku",
		githubUrl: "https://github.com/ychoy/wehuddle",
		liveUrl: "https://wehuddle.herokuapp.com"
		},
  {
		imageAlt: "Le Vagabond app screenshot",
		imageUrl: "assets/img/ychoy_levagabond.png",
		captions: "Le Vagabond",
		description: "Create and share hints on your favorite cities  ",
    about: "Le Vagabond is a web application built for a client. The web app allows users to share hints about their favorite cities throughout their travels. I collaborated with Christen Williams and Auston Wilkinson to build this web app. <br><br>  I developed the CRUD functionality for users to create, edit, delete comments to travel hints. I also developed the main dashboard page and user login page and incorporated user authentication. <br><br> We reviewed user experience with UX/UI designers Daniel Peck, Katie Yi, Seungjae Yun, Justin Wong, Harry Byres, and Urvi Jain. Based on feedback from our client and designers, we adjusted features to enrich user experience.",
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
	  about: "How do we inspire people to get more involved in politics? I collaborated with Weston Dombroski on this open source project to empower users to track Congressional bills on education and action items. <br><br> I built CRUD functionality for users to create, edit, update and delete action items, persisted two models with MongoDB and Mongoose, and styled the frontend with Bootstrap. I collaborated with Weston to craft wireframes, entity relationship diagram and user stories.",
    role: "Full Stack Developer",
    projectType: "Team Project",
	  tech: "MongoDB・Mongoose・Express・Node.js・Bootstrap・HTML・CSS・jQuery・Heroku",
	  githubUrl: "https://github.com/ychoy/carpe-gov",
	  liveUrl: "https://carpegov.herokuapp.com"
	  }

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
          <h4 style: "color: darkcyan">${projects[i].description}</h4>
          <p>${projects[i].about} <a href="${projects[i].githubUrl}"><i class="fa fa-github" aria-hidden="true"></i></a></p>
          <p><i class="fa fa-user" aria-hidden="true"></i> ${projects[i].role}, ${projects[i].projectType}</p>
          <p><i class="fa fa-wrench" aria-hidden="true"></i> ${projects[i].tech}</p>
        </div>
      </div>
      <br>
      `
    }

    $(".portfolio #portfolio").append(samples);

});
