const url = "actors.json";

const actorList = document.getElementById("actor");
const actorDetailsContent = document.querySelector(".actor-details-content");
const sortBtn = document.querySelectorAll(".sort_btn");
const popup = document.querySelector("#popup");
const close = document.querySelector("#close");

let movie = "all";
let list;

window.addEventListener("DOMContentLoaded", start);

function start() {
  fetchData();
  sortBtn.forEach((knap) => knap.addEventListener("click", filterMovie));
}

function filterMovie() {
  // jeg ændrer min variabel til at den skal være en film kategori (se html med dataset)
  movie = this.dataset.category;

  //der vil jeg gerne vise hvad for en knap der er blevet clicked på
  // så jeg giver den en anden/extra class

  // jeg tager classen af den der har vlagt klassen, så er der kun den ene der har den klasse
  // en slags reset
  document.querySelector(".valgt").classList.remove("valgt");

  //this er så kun den knap der er blevet trykket på (ikke dem alle)
  this.classList.add("valgt");

  //sender til vishairType som skal vise hair types
  showList();
}

async function fetchData() {
  const response = await fetch(url);
  list = await response.json();
  showList();
}

function showList() {
  actor.textContent = "";
  list.forEach((actor) => {
    if (
      // if movie category is all :
      movie == "all" ||
      // or
      // if movie cat is specified
      movie == actor.movie
    ) {
      btn = document.createElement("button");
      btn.setAttribute("class", "actor");
      // btn.setAttribute("data-id", actor.fullname);
      btn.textContent = actor.fullname;
      actorList.appendChild(btn);
      btn.addEventListener("click", () => getActorDetails(actor));
    }
  });
}

function getActorDetails(actor) {
  console.log(actor);
  //   actor = list[0];
  popup.style.display = "block";
  actorDetailsContent.innerHTML = `<h2 class = "actor-fullname">${actor.fullname}</h2>
          <p class = "actor-movie">You guessed it ! <b>${actor.movie}</b></p>`;
}

close.addEventListener("click", () => (popup.style.display = "none"));

//********** Caroline's code -- different methods (not the same indicators obviously)

// const detailed = document.querySelector(".details");
// const button = document.querySelector(".actorButton");
// const url = "actors.json";
// fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
//     handleData(data);
//   });

// function handleData(data) {
//   //console.log(data);

//   data.forEach(showDetails);
// }

// function showDetails(details) {
//   //console.log(details);

//   //grab template
//   const template = document.querySelector("#actorFilm").content;
//   //clone it
//   const copy = template.cloneNode(true);
//   //change it
//   copy.querySelector(".actorName").textContent = details.fullname;
//   copy.querySelector(".filmTitle").textContent = details.movie;
//   copy.querySelector("article").addEventListener("click", showFilm);
//   //grab parent
//   const parent = document.querySelector("main");
//   parent.appendChild(copy);
//   //append child
// }

// function showFilm() {
//   const details = this.querySelector(".details");
//   if (details.classList.contains("show")) details.classList.remove("show");
//   else if (document.querySelector(".show")) {
//     document.querySelector(".show").classList.remove("show");
//     details.classList.add("show");
//   } else {
//     details.classList.add("show");
//   }

//   //this.querySelector(".details").classList.toggle("show");
// }

// // function toggledetails() {
// //   if (detailed.classList.contains("hide")) {
// //     detailed.classList.remove("hide");
// //     detailed.classList.add("show");
// //   } else {
// //     detailed.classList.remove("show");
// //     detailed.classList.add("hide");
// //   }
// // }
