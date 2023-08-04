let logo = document.querySelector(".fa-clock");
let option = document.querySelector("#option");

logo.onclick = () => {
    logo.setAttribute("id", "clock-hide");
    option.classList.remove("hidden");
}

let stopwatch = document.querySelector("#watch");
let stopwatch2 = document.querySelector("#Stopwatch");
stopwatch.onclick = () => {
    option.classList.add("hidden");
    stopwatch2.classList.remove("hidden");
}

let clock = document.querySelector("#time");
let clock2 = document.querySelector("#Clock");
clock.onclick = () => {
    option.classList.add("hidden");
    clock2.classList.remove("hidden");
}

let arrowback = document.querySelector(".fa-circle-left");
arrowback.onclick = () => {
    option.classList.add("hidden");
    logo.removeAttribute("id", "clock-hide");
}
document.querySelector(".fa-circle-left-option1").onclick = () => {
    stopwatch2.classList.add("hidden");
    option.classList.remove("hidden");
}
document.querySelector(".fa-circle-left-option2").onclick=()=>{
    clock2.classList.add("hidden");
    option.classList.remove("hidden");
}