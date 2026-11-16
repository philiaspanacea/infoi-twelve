console.log ("Hello World!");

const posbtn = document.querySelector("#posbtn");
const counter = document.querySelector("#counter");

posbtn.addEventListener("click", ()=> {
    counter.innerHTML = "1"
})