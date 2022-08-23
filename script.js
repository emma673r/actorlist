// "use strict";
// let list;

// const url = "actors.json";
// const main = document.querySelector("#main");

// window.addEventListener("DOMContentLoaded", start);

// function start() {
//   main.innerHTML = `<h1>Actor list</h1>
//   <section id="section"></section>`;
//   const section = document.querySelector("#section");
//   section.style.display = "flex";
//   section.style.flexWrap = "wrap";
//   section.style.gap = "10px";
//   //   section.style.flexDirection = "column";
//   fetchData();
// }

// async function fetchData() {
//   const response = await fetch(url);
//   list = await response.json();
//   //console.log(list);
//   showList();
// }

// function showList() {
//   //console.log("list", list);
//   list.forEach((actor) => {
//     section.innerHTML += `<button class="actor" data-id="actor">${actor.fullname}</button>`;

//   });
//   styleBtn();

// }

// function styleBtn() {
//   const btn = document.querySelectorAll(".actor");
//   btn.forEach((btn) => {
//     btn.style.width = "15ch";
//     btn.style.minHeight = "60px";
//     btn.addEventListener("click", () => showActor(actor));
//   });
// }

// function showActor(actor) {
//   console.log("hello");
// }

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
  //console.log(list);
  showList();
}

function showList() {
  list.forEach((actor) => {
    actorList.innerHTML += `<button class="actor" data-id="${actor.fullname}">${actor.fullname}</button>`;
    actorList.addEventListener("click", () => getActorDetails(actor));
  });
}

function getActorDetails(actor) {
  console.log(actor);
//   actor = list[0];
  actorDetailsContent.innerHTML = `<h2 class = "actor-fullname">${actor.fullname}</h2>
          <p class = "actor-movie">${actor.movie}</p>`;
  // actor.forEach((actor), click)
  // if (actor.classList.contains("actor")) {
  //    actorDetailsContent.innerHTML
  // }
}
