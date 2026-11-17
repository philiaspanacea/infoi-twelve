console.log ("Hello World!");

if(!localStorage.getItem("keep")){
    localStorage.setItem("keep", JSON.stringify({
        count: 0,
        lastUpdated: null,
        best: 0
    }));
}

const posbtn = document.querySelector("#posbtn");
const negbtn = document.querySelector("#negbtn");
const counter = document.querySelector("#counter");
const resbtn = document.querySelector("#reset");
const bstnum = document.querySelector("#num");
const time = document.querySelector("#time");

let keep = JSON.parse(localStorage.getItem("keep"));
let counterState = 0;

function display(){
    counter.innerHTML = counterState;
    time.innerHTML = keep.lastUpdated || "Never";
    bstnum.innerHTML = JSON.parse (localStorage.getItem("keep"));
}

function save(){
    localStorage.setItem("keep", JSON.stringify(counterState));
}

posbtn.addEventListener("click", ()=>{
    counterState++;
    if (keep.count > keep.best){
        keep.best = keep.count;
    }
    save();
    display();
});

negbtn.addEventListener("click", ()=>{
    if (counterState > 0){
        counterState--;
    }
    display();
})

resbtn.addEventListener("click", ()=>{
    counterState = 0;
    display();
})

display();
