const url = src="actors.json";
const main = document.getElementsByTagName("main");

window.addEventListener("DOMContentLoaded", start);
 function start() {
    fetchData();
 }

 async function fetchData() {
   const respons = await fetch(url);
   list = await response.json();
   console.log(list);
   showList();
 }

 function showList() {
    let main = "";
    main.innerHTML = <h2>Actor List</h2>;
 }

 showList();