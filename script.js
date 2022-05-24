const progressBar = document.getElementById("range-progress-bar");
const knob = document.querySelector(".knob");
const moneyAmount = document.querySelector(".money-amount");
const button = document.querySelector(".buy-button");
const mouseX = document.querySelector(".mouse-x");
const mouseY = document.querySelector(".mouse-y");
progressBar.onload =valueInputed=>{
    let val = progressBar.value;
    moneyAmount.innerHTML = `$${val}`;
};
button.onclick= clicked=>{
    console.log("clicked");
};

progressBar.oninput= valueInputed=>{
    let val = progressBar.value;
    moneyAmount.innerHTML = `$${val}`;
};