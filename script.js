const progressBar = document.querySelector(".progress-bar");
const knob = document.querySelector(".knob");
const moneyAmount = document.querySelector(".money-amount");
let pseudoElementWidth = 16;

function knobDragging(){
    const progressBarWidth = progressBar.style.width();
    clampValue()
}

function clampValue(value, max, min)
{
    if(value >= max) () => value = max;
    else if(value <= min) () => value = min;
}