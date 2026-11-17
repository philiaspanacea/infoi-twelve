console.log ("Hello World!");

if (!localStorage.getItem("counter")){
    localStorage.setItem("counter", JSON.stringify ({
        count: 0,
        best: 0,
        lastUpdated: null
    }));
}

let counter = JSON.parse (localStorage.getItem("counter"));

const counterState = document.getElementById("counter");
const time = document.getElementById("time");
const bstnum = document.getElementById("num");
const posbtn = document.querySelector("#posbtn");
const negbtn = document.querySelector("#negbtn");
const resbtn = document.querySelector("#reset");

function display() {
    counterState.innerHTML = counter.count;
    bstnum.innerHTML = counter.best;
    time.innerHTML = (counter.lastUpdated || "Never");
}

function save(){
    localStorage.setItem("counter", JSON.stringify(counter));

}

posbtn.addEventListener("click", () => {

    counter.count++;

    if (counter.count > counter.best) {
        counter.best = counter.count;
    }
    counter.lastUpdated = new Date ().toLocaleString();

    save();
    display();
})

negbtn.addEventListener("click", () => {

    if (counter.count > 0){
        counter.count--;
        counter.lastUpdated = new Date().toLocaleString();

        save();
        display();
    }

});

resbtn.addEventListener("click", () => {
    counter.count = 0;
    counter.lastUpdated = new Date().toLocaleString();

    save();
    display();
});

display();

// const posbtn = document.querySelector("#posbtn");
// const negbtn = document.querySelector("#negbtn");
// const counter = document.querySelector("#counter");
// const resbtn = document.querySelector("#reset");
// const bstnum = document.querySelector("#num");
// const time = document.querySelector("#time");

// let keep = JSON.parse(localStorage.getItem("keep"));
// let counterState = 0;

// function display(){
//     counter.innerHTML = counterState;
//     time.innerHTML = keep.time || "Never";
//     bstnum.innerHTML = JSON.parse (localStorage.getItem("keep"));
// }

// function save(){
//     localStorage.setItem("keep", JSON.stringify(counterState));
// }

// posbtn.addEventListener("click", ()=>{
//     counterState++;
//     if (keep.counter > keep.bstnum){
//         keep.bstnum = keep.counter;
//     }
//     keep.time = Date();
//     save();
//     display();
// });

// negbtn.addEventListener("click", ()=>{
//     if (counterState > 0){
//         counterState--;
//     }
//     display();
// })

// resbtn.addEventListener("click", ()=>{
//     counterState = 0;
//     display();
// })

// display();
