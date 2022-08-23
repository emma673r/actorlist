const url = "actors.json";
const actorList = document.getElementById("actor");
const actorDetailsContent = document.querySelector(".actor-details-content");

window.addEventListener("DOMContentLoaded", start);

function start() {
  fetchData();
}

async function fetchData() {
  const response = await fetch(url);
  list = await response.json();
  showList();
}

function showList() {
  list.forEach((actor) => {
    btn = document.createElement("button");
    btn.setAttribute("class", "actor");
    btn.setAttribute("data-id", actor.fullname);
    btn.textContent = actor.fullname;
    actorList.appendChild(btn);
    btn.addEventListener("click", () => getActorDetails(actor));
  });
}

function getActorDetails(actor) {
  console.log(actor);
  //   actor = list[0];
  actorDetailsContent.innerHTML = `<h2 class = "actor-fullname">${actor.fullname}</h2>
          <p class = "actor-movie">You guessed it ! <b>${actor.movie}</b></p>`;
}
